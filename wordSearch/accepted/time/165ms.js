function search(word, i, j, index, board, result) {
  if (index === word.length - 1) {
    result.value = true;
    return;
  }
  if (result.value) {
    return;
  }
  board[i][j] = null;
  if (i + 1 < board.length && word[index + 1] === board[i + 1][j]) {
    search(word, i + 1, j, index + 1, board, result);
  }
  if (j + 1 < board[0].length && word[index + 1] === board[i][j + 1]) {
    search(word, i, j + 1, index + 1, board, result);
  }
  if (i - 1 >= 0 && word[index + 1] === board[i - 1][j]) {
    search(word, i - 1, j, index + 1, board, result);
  }
  if (j - 1 >= 0 && word[index + 1] === board[i][j - 1]) {
    search(word, i, j - 1, index + 1, board, result);
  }
  board[i][j] = word[index];
}

var exist = function (board, word) {
  let result = { value: false };
  let charArray = [];
  let count = 0;

  word.split("").forEach((char) => {
    if (charArray[char] !== true) {
      charArray[char] = true;
      count++;
    }
  });

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (charArray[board[i][j]] === true) {
        charArray[board[i][j]] = false;
        count--;
      }
    }
  }
  if (count > 0) {
    return result.value;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        search(word, i, j, 0, board, result);
      }
    }
  }
  return result.value;
};
