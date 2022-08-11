var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  if (badBoard()) return false;
  const seen = new Array(rows * cols);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (word[0] === board[r][c] && findWord(r, c, 0)) return true;
    }
  }
  return false;

  function findWord(r, c, i) {
    if (i === word.length) return true;
    const rc = r * cols + c;
    if (seen[rc]) return false;
    if (board[r]?.[c] === word[i]) {
      seen[rc] = true;
      if (
        findWord(r + 1, c, i + 1) ||
        findWord(r - 1, c, i + 1) ||
        findWord(r, c + 1, i + 1) ||
        findWord(r, c - 1, i + 1)
      )
        return true;
      seen[rc] = false;
    }
    return false;
  }
  function badBoard() {
    // smaller board
    if (word.length > rows * cols) return true;

    // pruning: not enough character frequency in board
    const count = new Map();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        count.set(board[i][j], (count.get(board[i][j]) ?? 0) + 1);
      }
    }
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i);
      if (!count.has(c)) {
        return true;
      } else {
        let temp = count.get(c);
        if (temp === 1) {
          count.delete(c);
        } else {
          count.set(c, temp - 1);
        }
      }
    }
    return false;
  }
};
