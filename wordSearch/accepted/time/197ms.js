// can only be done using recursion
var exist = function (board, word) {
  let xsize = board.length;
  let ysize = board[0].length;
  let boradArea = xsize * ysize;
  // this is pruning
  if (boradArea < word.length) {
    return false;
  }
  // this is pruning
  let wordCharCount = {};
  for (let i = 0; i < word.length; i++) {
    wordCharCount[word[i]] = wordCharCount[word[i]] || 0;
    wordCharCount[word[i]]++;
  }
  // this is pruning
  let boardCharCount = {};
  for (let i = 0; i < xsize; i++) {
    for (let j = 0; j < ysize; j++) {
      boardCharCount[board[i][j]] = boardCharCount[board[i][j]] || 0;
      boardCharCount[board[i][j]]++;
    }
  }
  // this is pruning
  for (let key in wordCharCount) {
    if (!boardCharCount[key] || wordCharCount[key] > boardCharCount[key]) {
      return false;
    }
  }
  for (let i = 0; i < xsize; i++) {
    for (let j = 0; j < ysize; j++) {
      if (word[0] === board[i][j]) {
        if (rec(board, i, j, word)) {
          return true;
        }
      }
    }
  }
  return false;
};

var rec = function (board, x, y, word, index = 0) {
  if (
    x < 0 ||
    x === board.length ||
    y < 0 ||
    y === board[0].length ||
    board[x][y] === "#" ||
    word[index] !== board[x][y]
  ) {
    return;
  }
  index++;
  let saveBoardValue = board[x][y];
  board[x][y] = "#";
  if (index === word.length) {
    return true;
  }
  var res1 = rec(board, x + 1, y, word, index);
  var res2 = rec(board, x, y + 1, word, index);
  var res3 = rec(board, x, y - 1, word, index);
  var res4 = rec(board, x - 1, y, word, index);
  board[x][y] = saveBoardValue;
  return res1 || res2 || res3 || res4;
};
