var exist = function (board, word) {
  let height = board.length;
  let width = board[0].length;

  var wordFinder = function (rowInd, colInd, wordInd) {
    // keep track of visited squares
    let char = board[rowInd][colInd];
    board[rowInd][colInd] = "*";

    // base case
    if (wordInd === word.length - 1) {
      return true;
    }

    // check left
    if (
      colInd > 0 &&
      board[rowInd][colInd - 1] !== "*" &&
      board[rowInd][colInd - 1] === word[wordInd + 1]
    ) {
      if (wordFinder(rowInd, colInd - 1, wordInd + 1)) {
        return true;
      }
    }
    // check right
    if (
      colInd < width - 1 &&
      board[rowInd][colInd + 1] !== "*" &&
      board[rowInd][colInd + 1] === word[wordInd + 1]
    ) {
      if (wordFinder(rowInd, colInd + 1, wordInd + 1)) {
        return true;
      } else {
      }
    }
    // check up
    if (
      rowInd > 0 &&
      board[rowInd - 1][colInd] !== "*" &&
      board[rowInd - 1][colInd] === word[wordInd + 1]
    ) {
      if (wordFinder(rowInd - 1, colInd, wordInd + 1)) {
        return true;
      }
    }
    //check down
    if (
      rowInd < height - 1 &&
      board[rowInd + 1][colInd] !== "*" &&
      board[rowInd + 1][colInd] === word[wordInd + 1]
    ) {
      if (wordFinder(rowInd + 1, colInd, wordInd + 1)) {
        return true;
      }
    }

    // restore original value of square
    board[rowInd][colInd] = char;
    return false;
  };

  // iterate over board and start recursive word search if starting letter of word is found
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (board[r][c] === word[0]) {
        if (wordFinder(r, c, 0, new Map())) {
          return true;
        }
      }
    }
  }

  return false;
};
