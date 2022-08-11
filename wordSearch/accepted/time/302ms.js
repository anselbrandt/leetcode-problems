const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var exist = function (board, word) {
  const rows = board.length,
    cols = board[0].length;

  const m = rows;
  const n = cols;

  // pruning: case 1: not enough characters in board
  if (word.length > m * n) return false;

  // pruning: case 2: board does not contain characters or enough characters that word contains
  const count = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count.set(board[i][j], (count.get(board[i][j]) ?? 0) + 1);
    }
  }
  // const count2 = new Map();
  // for (let i = 0; i < word.length; i++) {
  //     count2.set(word[i], (count2.get(word[i])??0) + 1);
  // }
  // for(const [ch,ct] of count2){
  //     if((count.get(ch)??0) < ct) return false
  // }

  for (let i = 0; i < word.length; i++) {
    const c = word.charAt(i);
    if (!count.has(c)) {
      return false;
    } else {
      let temp = count.get(c);
      if (temp == 1) {
        count.delete(c);
      } else {
        count.set(c, temp - 1);
      }
    }
  }

  const seen = new Array(m * n);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (findWord(r, c, 0)) return true;
    }
  }
  return false;

  function findWord(r, c, i) {
    if (i === word.length) return true;
    const rc = r * cols + c;

    if (seen[rc]) return false;

    const ch = board[r]?.[c];
    if (ch === word[i]) {
      seen[rc] = true;
      for (const [dr, dc] of dirs) {
        if (findWord(r + dr, c + dc, i + 1)) return true;
      }
      seen[rc] = false;
    }
    return false;
  }
};
