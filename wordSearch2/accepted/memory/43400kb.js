var findWords = function (board, words) {
  let HEIGHT = board.length;
  let WIDTH = board[0].length;
  let flatBoard = board.flat();
  // function readBoard(x, y) { return board[y][x] }
  function readBoard(x, y) {
    return flatBoard[x + y * WIDTH];
  }

  let trie = new Trie(words);

  let result = new Set();
  let visited = new Array(WIDTH * HEIGHT);
  let trieNode = trie;

  function searchFrom(x, y) {
    if (x < 0 || x >= WIDTH || y < 0 || y >= HEIGHT) return;

    let i = x + y * WIDTH;
    if (visited[i]) return;
    visited[i] = 1;

    let char = readBoard(x, y);
    let prevTrieNode = trieNode;
    trieNode = trieNode.traverse(char);

    if (trieNode != null) {
      if (trieNode.isWord) result.add(trieNode.word);
      searchFrom(x + 1, y);
      searchFrom(x - 1, y);
      searchFrom(x, y + 1);
      searchFrom(x, y - 1);
    }

    // Backtrack
    trieNode = prevTrieNode;
    visited[i] = 0;
  }

  for (let y = 0; y < HEIGHT; y++)
    for (let x = 0; x < WIDTH; x++) searchFrom(x, y);

  return Array.from(result);
};

class Trie {
  constructor(words) {
    this.children = {};
    this.isWord = false;
    this.word = null;

    if (words) for (let word of words) this.insert(word);
  }

  insert(word) {
    let node = this;
    for (let char of word) {
      let child = node.children[char];
      if (!child) node.children[char] = child = new Trie();
      node = child;
    }
    node.isWord = true;
    node.word = word;
  }

  traverse(char) {
    return this.children[char];
  }
}
