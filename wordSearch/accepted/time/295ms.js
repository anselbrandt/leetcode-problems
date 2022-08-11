var exist = function (board, word) {
  // loop through each cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // check if current cell value is equal to first letter in word && start dept first search
      if (board[i][j] == word.charAt(0) && dfs(board, i, j, 0, word))
        return true;
    }
  }
  // return fasle , since true was not retun from dfs
  return false;
};

function dfs(board, i, j, count, word) {
  // return true if count is equal to word length
  if (count == word.length) return true;
  // return false if current i,j is out of bounds and current word equality with word letter(word.charAt(count))
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] != word.charAt(count)
  )
    return false;
  // store current cell value in temp and mark it as ' '
  let temp = board[i][j];
  board[i][j] = " ";
  // search for consequent letter in all four directions and store it in 'found' variable
  let found =
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);
  // add back value of current cell
  board[i][j] = temp;
  return found;
}
