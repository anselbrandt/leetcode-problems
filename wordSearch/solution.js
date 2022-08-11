// Given a 2D board of characters and a word, find if the word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
// For example, given the following board:

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";
// exists(board, "ABCCED") returns true, exists(board, "SEE") returns true, exists(board, "ABCB") returns false.

const board2 = [
  ["C", "A", "A"],
  ["A", "A", "A"],
  ["B", "C", "D"],
];
// true but fails
const word2 = "AAB";

const board3 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
// false but fails
const word3 = "ABCB";

const exists = (board, word) => {
  for (i in board) {
    for (j in board[i]) {
      if (board[i][j] == word[0]) {
        if (search(+i, +j, (pos = 0))) return true;
      }
    }
  }

  function search(i, j, pos) {
    if (pos == word.length) return true;
    if (board[i] === undefined || board[i][j] === undefined) return false;
    if (board[i][j] == word[pos]) {
      let temp = board[i][j];
      board[i][j] = 0;
      if (
        search(i - 1, j, pos + 1) ||
        search(i + 1, j, pos + 1) ||
        search(i, j - 1, pos + 1) ||
        search(i, j + 1, pos + 1)
      )
        return true;
      board[i][j] = temp;
    }
    return false;
  }
  return false;
};

console.log(exists(board3, word3));
