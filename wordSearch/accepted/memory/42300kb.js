var exist = function (board, word) {
  let rows = board.length,
    columns = board[0].length;
  let seen = new Array(rows).fill().map(() => {
    return Array(columns).fill(false);
  });
  const dfs = (r, c, i) => {
    if (i === word.length) {
      return true;
    }
    if (
      r >= rows ||
      r < 0 ||
      c >= columns ||
      c < 0 ||
      seen[r][c] ||
      board[r][c] !== word[i]
    ) {
      return false;
    }
    seen[r][c] = true;
    res =
      dfs(r + 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c - 1, i + 1);
    seen[r][c] = false;
    return res;
  };
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }
  return false;
};
