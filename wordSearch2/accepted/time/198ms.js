var Node = function () {
  this.children = new Map();
  this.word = null;
};

var Trie = function () {
  this.root = new Node();
};

Trie.prototype.insert = function (str) {
  let p = this.root;
  for (let char of str) {
    if (!p.children.has(char)) {
      p.children.set(char, new Node());
    }
    p = p.children.get(char);
  }
  p.word = str;
};

var findWords = function (board, words) {
  let trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  let res = [];
  let m = board.length,
    n = board[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  let searchWord = function (i, j, parent) {
    let char = board[i][j];
    let p = parent.children.get(char);
    if (p.word != null) {
      res.push(p.word);
      p.word = null;
    }
    board[i][j] = "$";
    for (let dir of directions) {
      let x = i + dir[0],
        y = j + dir[1];
      if (x >= 0 && y >= 0 && x < m && y < n && p.children.has(board[x][y])) {
        searchWord(x, y, p);
      }
    }
    board[i][j] = char;
    if (!p.children.size) {
      parent.children.delete(char);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (trie.root.children.has(board[i][j])) {
        searchWord(i, j, trie.root);
      }
    }
  }

  return res;
};
