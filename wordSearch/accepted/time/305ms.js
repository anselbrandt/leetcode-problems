let search = function (board, word, i, j, n) {
  if (n >= word.length) return true;
  if (i >= board.length || j >= board[0].length || i < 0 || j < 0) return false;

  let c = word[n];

  if (c == board[i][j]) {
    board[i][j] = "0";
    if (search(board, word, i + 1, j, n + 1)) return true;
    if (search(board, word, i - 1, j, n + 1)) return true;
    if (search(board, word, i, j + 1, n + 1)) return true;
    if (search(board, word, i, j - 1, n + 1)) return true;
    board[i][j] = c;
  }

  return false;
};

var exist = function (board, word) {
  var i, j;
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[0].length; j++) {
      if (search(board, word, i, j, 0)) return true;
    }
  }
  return false;
};
