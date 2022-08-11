var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }

  return false;
};

// returns true if word is found, false otherwise
const dfs = (board, i, j, count, word) => {
  //true condition -> if count === word.length
  if (count === word.length) return true;

  //false conditions: out of bounds? board[i][j] !== word[count]?

  const rowInbounds = 0 <= i && i < board.length;
  const colInbounds = 0 <= j && j < board[0].length;

  if (!rowInbounds || !colInbounds) return false;

  if (board[i][j] !== word[count]) return false;

  // if we get here we are inbounds, the board[i][j] is the correct letter
  const temp = board[i][j];
  board[i][j] = "";

  const left = dfs(board, i - 1, j, count + 1, word);
  const right = dfs(board, i + 1, j, count + 1, word);
  const up = dfs(board, i, j - 1, count + 1, word);
  const down = dfs(board, i, j + 1, count + 1, word);

  board[i][j] = temp;

  return left || right || up || down;
};
