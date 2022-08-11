var exist = function (board, word) {
  // Time complexity - O(N * 3^L) N= number of cells in board L=length of word,
  //Space - O(L)

  const m = board.length;
  const n = board[0].length;
  const visited = Array.from(Array(m), () => new Array(n).fill(false));

  // pruning: case 1: not enough characters in board
  if (word.length > m * n) {
    return false;
  }
  // pruning: case 2: board does not contain characters or enough characters that word contains
  const count = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count.set(board[i][j], (count.get(board[i][j]) || 0) + 1);
    }
  }

  for (let i = 0; i < word.length; i++) {
    const c = word.charAt(i);
    if (!count.has(c)) {
      return false;
    } else {
      let temp = count.get(c);
      if (temp == 1) {
        count.delete(c);
      } else {
        count.set(c, temp - 1);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word.charAt(0) == board[i][j] && search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;

  function search(i, j, index) {
    if (index === word.length) {
      return true;
    }

    if (
      i >= m ||
      i < 0 ||
      j >= n ||
      j < 0 ||
      board[i][j] != word.charAt(index) ||
      visited[i][j]
    ) {
      return false;
    }

    visited[i][j] = true;
    if (
      search(i - 1, j, index + 1) ||
      search(i + 1, j, index + 1) ||
      search(i, j - 1, index + 1) ||
      search(i, j + 1, index + 1)
    ) {
      return true;
    }

    visited[i][j] = false;
    return false;
  }
};
