var exist = function (board, word) {
  if (board.length === 0 || word.length === 0) {
    return false;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0] && findWord(board, row, col, word, 0)) {
        return true;
      }
    }
  }

  return false;
};

function findWord(board, row, col, word, index) {
  if (index >= word.length) {
    return true;
  }

  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[row].length ||
    board[row][col] === "-" ||
    board[row][col] !== word[index]
  ) {
    return false;
  }

  const temp = board[row][col];
  board[row][col] = "-";
  index++;

  const check =
    findWord(board, row - 1, col, word, index) ||
    findWord(board, row + 1, col, word, index) ||
    findWord(board, row, col - 1, word, index) ||
    findWord(board, row, col + 1, word, index);

  board[row][col] = temp;

  return check;
}
