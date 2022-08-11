var exist = function (board, word) {
  const visited = [];
  for (let i = 0; i < board.length; i++) {
    visited.push(new Array(board[i].length).fill(false));
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (existDFSRec([i, j], board, word.substring(1), visited)) {
          return true;
        }
      }
    }
  }
  return false;
};

function existDFSRec(pos, board, word, visited) {
  if (word.length === 0) {
    return true;
  }

  const [r, c] = pos;

  visited[r][c] = true;
  // Up
  if (
    r > 0 &&
    !visited[r - 1][c] &&
    board[r - 1][c] === word[0] &&
    existDFSRec([r - 1, c], board, word.substring(1), visited)
  ) {
    return true;
  }

  // Down
  if (
    r < board.length - 1 &&
    !visited[r + 1][c] &&
    board[r + 1][c] === word[0] &&
    existDFSRec([r + 1, c], board, word.substring(1), visited)
  ) {
    return true;
  }

  // Left
  if (
    c > 0 &&
    !visited[r][c - 1] &&
    board[r][c - 1] === word[0] &&
    existDFSRec([r, c - 1], board, word.substring(1), visited)
  ) {
    return true;
  }

  // Right
  if (
    c < board[r].length - 1 &&
    !visited[r][c + 1] &&
    board[r][c + 1] === word[0] &&
    existDFSRec([r, c + 1], board, word.substring(1), visited)
  ) {
    return true;
  }

  visited[r][c] = false;

  return false;
}
