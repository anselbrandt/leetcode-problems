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

const exists = (board, word) => {
  const chars = Array.from(word);

  let result = false;

  const search = (i, j, arr, slice) => {
    if (
      arr[i] === undefined ||
      arr[i][j] === undefined ||
      arr[i][j] !== slice[0]
    )
      return;
    if (slice.length === 1 && arr[i][j] === slice[0]) result = true;
    const newSlice = [...slice].slice(1);
    arr[i][j] = 0;
    search(i + 1, j, arr, newSlice);
    search(i - 1, j, arr, newSlice);
    search(i, j + 1, arr, newSlice);
    search(i, j - 1, arr, newSlice);
  };

  for (i in board) {
    for (j in board[i]) {
      if (board[i][j] === chars[0]) {
        search(+i, +j, [...board], [...chars]);
      }
    }
  }
  return result;
};

console.log(exists(board, "ABCCED"));
