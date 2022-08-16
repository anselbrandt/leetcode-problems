var findWords = function (board, words) {
  const boardRows = board.length,
    boardCols = board[0].length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function backtrack(row, col, node) {
    if (row >= 0 && col >= 0 && row < boardRows && col < boardCols) {
      const cell = board[row][col];
      board[row][col] = " ";
      if (node[cell]) {
        node = node[cell];
        if (node.word) {
          res.push(node.word);
          const word = node.word;
          delete node.word;
          let root = trie;
          for (const char of word) {
            root[char].count--;
            if (root[char].count === 0) {
              delete root[char];
              break;
            }
            root = root[char];
          }
        }
        for (const dir of dirs) {
          backtrack(row + dir[0], col + dir[1], node);
        }
      }
      board[row][col] = cell;
    }
  }

  function removeTrieNode(node) {}

  const trie = {};
  for (const word of words) {
    let root = trie;
    for (const char of word) {
      root[char] = root[char] || {};
      root[char].count = root[char].count + 1 || 1;
      root = root[char];
    }
    root.word = word;
  }

  const res = [];
  for (let i = 0; i < boardRows; i++) {
    for (let j = 0; j < boardCols; j++) {
      if (trie[board[i][j]]) {
        backtrack(i, j, trie);
      }
    }
  }

  return res;
};
