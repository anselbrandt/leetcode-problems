var findWords = function (board, words) {
  let isValid = (i, j) => {
    return i >= 0 && j >= 0 && i < N && j < M && board[i][j] != "#";
  };

  let search = (i, j, root) => {
    if (!isValid(i, j)) return;
    let char = board[i][j];

    let node = root.getChild(char);
    if (node == null) return;
    if (node.isLast) {
      results.push(node.word);
      dictionary.delete(node.word);
    }

    board[i][j] = "#";
    let directions = [
      { dx: 1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
      { dx: -1, dy: 0 },
    ];
    for (let { dx, dy } of directions) {
      search(i + dx, j + dy, node);
    }
    board[i][j] = char;
  };

  let results = [];
  let N = board.length;
  let M = board[0].length;

  let dictionary = new Trie();
  for (let word of words) {
    dictionary.insert(word);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      search(i, j, dictionary.root);
    }
  }

  return [...new Set(results).values()];
};

class TrieNode {
  constructor(char) {
    this.char = char;
    this.children = new Map();
    this.isLast = false;
    this.word = null;
  }

  getChild(char) {
    return this.children.get(char);
  }

  hasChildren() {
    return this.children.size !== 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let children = this.root.children;
    for (let [index, letter] of word.split("").entries()) {
      let node = null;
      if (children.has(letter)) {
        node = children.get(letter);
        children = node.children;
      } else {
        node = new TrieNode(letter);
        children.set(letter, node);
        children = node.children;
      }

      // Last charachter
      if (index === word.length - 1) {
        node.isLast = true;
        node.word = word;
      }
    }
  }

  delete(word, node = this.root, depth = 0, parent = null) {
    if (word.length === depth) {
      // if it is a prefix of any other word
      if (node.hasChildren()) {
        node.isLast = false;
      } else {
        parent && parent.children.delete(node.char);
      }
      return true;
    }

    let nextNode = node.getChild(word[depth]);
    if (nextNode == null || nextNode.char != word[depth]) return false;

    let result = this.delete(word, nextNode, depth + 1, node);

    if (!node.hasChildren() && !node.isLast) {
      parent && parent.children.delete(node.char);
    }
    return result;
  }
}
