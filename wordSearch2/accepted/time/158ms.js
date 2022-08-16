var findWords = function (board, words) {
  const H = board.length;
  const W = board[0].length;
  const visited = new Array(W * H).fill(false);
  const foundWords = [];
  const context = { board, foundWords, visited, W, H };
  const trie = new Trie(null, "");

  for (const word of words) {
    trie.insertWord(word);
  }

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      findAllWords(context, x, y, [], trie);
    }
  }
  return foundWords;
};

function findAllWords(context, x, y, path, trie) {
  const { board, visited, W, H, foundWords } = context;
  const key = y * W + x;

  if (visited[key]) {
    return;
  }
  const nextTrie = trie.getChild(board[y][x]);
  if (nextTrie === null) {
    return;
  }
  visited[key] = true;
  path.push(board[y][x]);

  if (nextTrie.isWordEnd()) {
    foundWords.push(path.join(""));
    nextTrie.removeWord();
  }

  if (x > 0) {
    findAllWords(context, x - 1, y, path, nextTrie);
  }
  if (x < W - 1) {
    findAllWords(context, x + 1, y, path, nextTrie);
  }
  if (y > 0) {
    findAllWords(context, x, y - 1, path, nextTrie);
  }
  if (y < H - 1) {
    findAllWords(context, x, y + 1, path, nextTrie);
  }

  visited[key] = false;
  path.pop();

  return;
}

class Trie {
  #children = new Map();
  #isWordEnd = false;

  constructor(parent, key) {
    this.parent = parent;
    this.key = key;
  }
  getChild(key) {
    return this.#children.get(key) ?? null;
  }
  isWordEnd() {
    return this.#isWordEnd;
  }
  removeWord() {
    this.#isWordEnd = false;
    this.cleanup();
  }
  cleanup() {
    if (this.#isWordEnd || this.#children.size > 0 || this.parent === null) {
      return;
    }
    this.parent.#children.delete(this.key);
    this.parent.cleanup();
  }
  insertWord(word) {
    let node = this;

    for (const key of word) {
      let child = node.#children.get(key);

      if (child === undefined) {
        child = new Trie(node, key);
        node.#children.set(key, child);
      }
      node = child;
    }
    node.#isWordEnd = true;
  }
}
