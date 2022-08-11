var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word.charAt(0) && dfs(board, word, i, j, 0))
        return true;
    }
  }

  return false;
};

const isOutside = (board, i, j) => {
  return i < 0 || j < 0 || i >= board.length || j >= board[i].length;
};

const dfs = (board, word, i, j, count) => {
  if (word.length === count) return true;
  if (isOutside(board, i, j) || board[i][j] !== word.charAt(count))
    return false;

  const cell = board[i][j];
  board[i][j] = "*";

  let found =
    dfs(board, word, i - 1, j, count + 1) ||
    dfs(board, word, i + 1, j, count + 1) ||
    dfs(board, word, i, j - 1, count + 1) ||
    dfs(board, word, i, j + 1, count + 1);

  board[i][j] = cell;

  return found;
};
