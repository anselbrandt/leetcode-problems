/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
// true
const word = "ABCCED";

const search = (i, j, board, chars, index = 0) => {
  if (
    board[i] === undefined ||
    board[i][j] === undefined ||
    board[i][j] !== chars[index] ||
    index > chars.length - 1
  )
    return;
  if (index === chars.length - 1 && board[i][j] === chars[index]) return true;
  board[i][j] = 0;
  const result =
    search(i + 1, j, board, chars, index + 1) ||
    search(i - 1, j, board, chars, index + 1) ||
    search(i, j + 1, board, chars, index + 1) ||
    search(i, j - 1, board, chars, index + 1);
  board[i][j] = chars[index];
  return result;
};

var exist = function (board, word) {
  const chars = [...word];
  for (i in board) {
    for (j in board[i]) {
      if (search(+i, +j, board, chars)) return true;
    }
  }
  return false;
};

console.log(exist(board, word));
