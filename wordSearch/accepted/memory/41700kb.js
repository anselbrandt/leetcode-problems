var exist = function (board, word) {
  const deltaX = [1, 0, -1, 0];
  const deltaY = [0, 1, 0, -1];

  const m = board.length,
    n = board[0].length;

  let target = 0,
    hasWord = false;

  function DFS(row, col) {
    if (target === word.length) hasWord = true;

    if (row < 0 || row === m) return;
    if (col < 0 || col === n) return;

    if (board[row][col] === word[target]) {
      const temp = board[row][col];
      board[row][col] = "*";

      for (let i = 0; i < 4; i++) {
        const newRow = row + deltaY[i];
        const newCol = col + deltaX[i];

        target++;

        DFS(newRow, newCol);

        target--;
      }

      board[row][col] = temp;
    }
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      DFS(row, col);

      if (hasWord) break;
    }
  }

  return hasWord;
};
