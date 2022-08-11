var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        const result = dfs(i, j, 0);
        if (result) return true;
      }
    }
  }

  return false;

  function dfs(i, j, len) {
    if (len === word.length) return true;
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] === "$") return false;
    if (board[i][j] !== word[len]) return false;
    const temp = board[i][j];
    board[i][j] = "$";
    const result =
      dfs(i, j + 1, len + 1) ||
      dfs(i + 1, j, len + 1) ||
      dfs(i, j - 1, len + 1) ||
      dfs(i - 1, j, len + 1);
    board[i][j] = temp;
    return result;
  }
};
