var exist = function (board, word) {
  let visited = Array.from(Array(board.length), () =>
    new Array(board[0].length).fill(false)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const cur = board[i][j];
      if (cur == word[0]) {
        const found = dfs(board, word, i, j, visited, 0);
        if (found) {
          return true;
        }
      }
    }
  }
  return false;
};

function dfs(board, word, i, j, visited, idx) {
  if (idx == word.length) return true;

  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    visited[i][j] ||
    word[idx] != board[i][j]
  ) {
    return false;
  }

  visited[i][j] = true;

  const left = dfs(board, word, i, j - 1, visited, idx + 1);
  const right = dfs(board, word, i, j + 1, visited, idx + 1);
  const up = dfs(board, word, i - 1, j, visited, idx + 1);
  const down = dfs(board, word, i + 1, j, visited, idx + 1);

  if (left || right || up || down) return true;

  visited[i][j] = false;

  return false;
}
