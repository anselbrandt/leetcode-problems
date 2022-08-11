var exist = function (board, word) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(board, 0, i, j, word)) {
          return true;
        }
      }
    }
  }
  return false;
};

var dfs = function (board, count, i, j, word) {
  if (word.length == count) return true;

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    board[i][j] != word[count]
  ) {
    return false;
  }

  var temp = board[i][j];
  board[i][j] = "";

  var found =
    dfs(board, count + 1, i - 1, j, word) ||
    dfs(board, count + 1, i + 1, j, word) ||
    dfs(board, count + 1, i, j - 1, word) ||
    dfs(board, count + 1, i, j + 1, word);

  board[i][j] = temp;

  return found;
};
