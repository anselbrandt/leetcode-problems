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
  let found = false;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        bfs(row, col, 0, word);
      }
    }
  }

  function bfs(row, col, count, word) {
    if (count === word.length) {
      found = true;
      return;
    }
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[count]
    ) {
      return;
    }

    let temp = board[row][col];
    board[row][col] = "";

    bfs(row + 1, col, count + 1, word);
    bfs(row - 1, col, count + 1, word);
    bfs(row, col + 1, count + 1, word);
    bfs(row, col - 1, count + 1, word);

    board[row][col] = temp;
  }
  return found;
};

console.log(exists(board3, word3));
