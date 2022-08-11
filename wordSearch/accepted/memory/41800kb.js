var exist = function (board, word) {
  const dfs = (r, c, i) => {
    if (word.length === i) return true;
    if (
      r >= board.length ||
      r < 0 ||
      c < 0 ||
      c >= board[0].length ||
      board[r][c] !== word[i]
    )
      return false;

    board[r][c] = "#";

    if (
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1)
    )
      return true;
    board[r][c] = word[i];
  };

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
    }
  }
  return false;
};
