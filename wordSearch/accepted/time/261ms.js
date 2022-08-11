var exist = function (board, word) {
  // pruning 1: board is smaller than word
  if (board.length * board[0].length < word.length) return false;

  // pruning 2: not enough characters from word present in board
  const bf = new Map();
  for (const row of board) {
    for (const ch of row) {
      const ct = bf.get(ch) ?? 0;
      bf.set(ch, ct + 1);
    }
  }
  for (const ch of word) {
    const ct = bf.get(ch) ?? 0;
    if (ct === 0) return false;
    bf.set(ch, ct - 1);
  }

  function backtrack(i, r, c) {
    if (i === word.length) return true;
    if (board[r]?.[c] == null || word[i] !== board[r][c]) return false;

    board[r][c] = null;
    const ans =
      backtrack(i + 1, r, c + 1) ||
      backtrack(i + 1, r + 1, c) ||
      backtrack(i + 1, r, c - 1) ||
      backtrack(i + 1, r - 1, c);
    board[r][c] = word[i];
    return ans;
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (backtrack(0, r, c)) return true;
    }
  }
  return false;
};
