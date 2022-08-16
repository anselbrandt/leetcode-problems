var TrieNode = function (char) {
  this.char = char;
  this.word = null;
  this.children = null;
};

var buildTrie = function (node, word, index) {
  if (index >= word.length) return;

  if (node.children == null) {
    node.children = new Map();
  }
  var char = word[index];
  var child = null;
  if (!node.children.has(char)) {
    child = new TrieNode(char);
    node.children.set(char, child);
  } else {
    child = node.children.get(char);
  }
  if (index === word.length - 1) {
    child.word = word;
  } else {
    buildTrie(child, word, index + 1);
  }
};

const dirs = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
var backtracking = function (board, i, j, parent, valid) {
  const m = board.length,
    n = board[0].length;
  var char = board[i][j];
  if (parent.children != null && parent.children.has(char)) {
    var child = parent.children.get(char);
    if (child.word != null) {
      valid.add(child.word);
      child.word = null;
    }
    if (child.children != null) {
      board[i][j] = "#";
      for (var k = 0; k < dirs.length; ++k) {
        var ni = i + dirs[k][0];
        var nj = j + dirs[k][1];

        if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
          backtracking(board, ni, nj, child, valid);
        }
      }
      board[i][j] = char;
    }
    if (
      child.word == null &&
      (child.children == null ||
        (child.children != null && child.children.size === 0))
    ) {
      parent.children.delete(char);
    }
  }
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  var root = new TrieNode("");
  var valid = new Set();

  var i, j;
  for (i = 0; i < words.length; ++i) {
    buildTrie(root, words[i], 0);
  }

  for (i = 0; i < board.length; ++i) {
    for (j = 0; j < board[i].length; ++j) {
      backtracking(board, i, j, root, valid);
    }
  }

  return Array.from(valid);
};
