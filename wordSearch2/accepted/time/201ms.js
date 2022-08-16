var findWords = function (board, words) {
  const H = board.length;
  const W = board[0].length;
  const visited = new Array(W * H).fill(false);
  const foundWords = [];
  const context = { board, foundWords, visited, W, H };
  const trie = new Trie(null, "");

  for (const word of words) {
    trie.insert(word);
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
  const nextTrie = trie.children.get(board[y][x]);
  if (nextTrie === undefined) {
    return;
  }
  visited[key] = true;
  path.push(board[y][x]);

  if (nextTrie.value) {
    foundWords.push(path.join(""));
    nextTrie.remove();
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
  children = new Map();
  value = false;

  constructor(parent, key) {
    this.parent = parent;
    this.key = key;
  }
  remove() {
    this.value = false;
    this.cleanup();
  }
  cleanup() {
    if (this.value || this.children.size > 0 || this.parent === null) {
      return;
    }
    this.parent.children.delete(this.key);
    this.parent.cleanup();
  }
  insert(word) {
    let node = this;

    for (const key of word) {
      let child = node.children.get(key);

      if (child === undefined) {
        child = new Trie(node, key);
        node.children.set(key, child);
      }
      node = child;
    }
    node.value = true;
  }
}
