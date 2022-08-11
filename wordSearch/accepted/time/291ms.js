var exist = function (board, word) {
  const W = board[0].length;
  const H = board.length;

  function dfs(x, y, pos) {
    if (pos === word.length - 1) {
      return true;
    }
    let result = false;

    if (x + 1 < W && board[y][x + 1] === word[pos + 1]) {
      const tmp = board[y][x];
      board[y][x] = ".";
      result |= dfs(x + 1, y, pos + 1);
      board[y][x] = tmp;
    }
    if (x - 1 >= 0 && board[y][x - 1] === word[pos + 1]) {
      const tmp = board[y][x];
      board[y][x] = ".";
      result |= dfs(x - 1, y, pos + 1);
      board[y][x] = tmp;
    }
    if (y + 1 < H && board[y + 1][x] === word[pos + 1]) {
      const tmp = board[y][x];
      board[y][x] = ".";
      result |= dfs(x, y + 1, pos + 1);
      board[y][x] = tmp;
    }
    if (y - 1 >= 0 && board[y - 1][x] === word[pos + 1]) {
      const tmp = board[y][x];
      board[y][x] = ".";
      result |= dfs(x, y - 1, pos + 1);
      board[y][x] = tmp;
    }
    return result;
  }
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (board[y][x] === word[0] && dfs(x, y, 0)) {
        return true;
      }
    }
  }
  return false;
};
