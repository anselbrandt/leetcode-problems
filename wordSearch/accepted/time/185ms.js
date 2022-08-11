var exist = function (board, word) {
  if (word.length > board.length * board[0].length) {
    return false;
  }

  let charMap = new Map();
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (!charMap.has()) {
        charMap.set(board[x][y], true);
      }
    }
  }

  for (let char of word) {
    if (!charMap.has(char)) {
      return false;
    }
  }

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      let found = backtrack(board, word, x, y, 0);
      if (found) {
        return true;
      }
    }
  }

  return false;
};

/// Iterate over every square

/// If it matches the first char backtrack from there

/// Check every direction if it maches the next index

/// Backtrack from there (IMPORTANT cannot move backwards onto the last square)

/// N X M = T

/// W World length
/// O (T * W)
/// Do not visit is null or the coordinate this should not move to afterwards (as it is coming from there)
function backtrack(board, word, x, y, wordIndex) {
  if (wordIndex >= word.length) {
    // We are in an interation where we finished looking for the string
    return true;
  }

  let characterToCheck = word[wordIndex];
  let currentCellContent = getCellContent(board, x, y);

  if (characterToCheck != currentCellContent) {
    /// We cannot possibly find the world going in this direction as this is already
    /// the wrong character
    return false;
  }

  let newWordIndex = wordIndex + 1;

  board[x][y] = "0";
  var res =
    backtrack(board, word, x + 1, y, newWordIndex) ||
    backtrack(board, word, x - 1, y, newWordIndex) ||
    backtrack(board, word, x, y + 1, newWordIndex) ||
    backtrack(board, word, x, y - 1, newWordIndex);

  board[x][y] = currentCellContent;

  return res;
}

/// Returns the current cell content in a safe manner
/// Return '*' if it is out of bounds
function getCellContent(board, x, y) {
  if (x >= board.length || x < 0) {
    return "*";
  }

  if (y >= board[x].length || y < 0) {
    return "*";
  }

  return board[x][y];
}
