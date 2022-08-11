const Dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

var exist = function (board, word) {
  const rLength = board.length;
  const cLength = board[0].length;

  if (word.length > rLength * cLength) return false;

  const set = new Set(board.flat());

  for (let char of word) {
    if (!set.has(char)) return false;
  }

  function search(r, c, i = 0) {
    if (i >= word.length) return true;

    if (
      r < 0 ||
      r >= rLength ||
      c < 0 ||
      c >= cLength ||
      board[r][c] !== word[i]
    )
      return false;

    board[r][c] = "";

    for (let [x, y] of Dirs) {
      if (search(r + x, c + y, i + 1)) {
        return true;
      }
    }

    board[r][c] = word[i];

    return false;
  }

  for (let r = 0; r < rLength; r++) {
    for (let c = 0; c < cLength; c++) {
      if (board[r][c] === word[0] && search(r, c)) {
        return true;
      }
    }
  }

  return false;
};
