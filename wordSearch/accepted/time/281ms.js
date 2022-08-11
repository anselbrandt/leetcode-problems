var exist = function (board, word) {
  let memo = Array(board.length)
    .fill()
    .map(() => Array(board[0].length).fill(false));
  let chars = Array.from(word);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (search(board, chars, memo, i, j)) {
        return true;
      }
    }
  }

  return false;
};

function search(board, chars, memo, i, j) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
    return false;
  }

  if (memo[i][j] === true) {
    return false;
  }

  memo[i][j] = true;
  const char = chars.pop();
  let result = false;

  if (char === board[i][j]) {
    if (chars.length === 0) {
      return true;
    }

    result =
      search(board, chars, memo, i, j + 1) ||
      search(board, chars, memo, i + 1, j) ||
      search(board, chars, memo, i - 1, j) ||
      search(board, chars, memo, i, j - 1);
  }
  chars.push(char);
  memo[i][j] = false;
  return result;
}
