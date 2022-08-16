var DFS = function (board, i, j, word, start, diff) {
  const m = board.length,
    n = board[0].length;
  var stack = [[i, j, 0, start]];
  var visited = new Set();
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (stack.length > 0) {
    var last = stack[stack.length - 1];
    var [ci, cj, k, index] = last;
    if ((diff > 0 && index === word.length - 1) || (diff < 0 && index === 0))
      return true;
    if (k === 0) {
      visited.add(ci * n + cj);
    }

    for (; k < dirs.length; ++k) {
      last[2] = k + 1;
      var ni = ci + dirs[k][0];
      var nj = cj + dirs[k][1];

      if (
        ni >= 0 &&
        ni < m &&
        nj >= 0 &&
        nj < n &&
        board[ni][nj] === word[index + diff]
      ) {
        var key = ni * n + nj;
        if (!visited.has(key)) {
          stack.push([ni, nj, 0, index + diff]);
          break;
        }
      }
    }
    if (k >= dirs.length) {
      stack.pop();
      visited.delete(ci * n + cj);
    }
  }
  return false;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  var char = new Set();
  var valid = new Set();
  var pending = new Set(words);

  var i, j;

  for (i = 0; i < board.length; ++i) {
    for (j = 0; j < board[i].length; ++j) {
      char.add(board[i][j]);
    }
  }

  for (i = 0; i < words.length; ++i) {
    for (j = 0; j < words[i].length; ++j) {
      if (!char.has(words[i][j])) {
        pending.delete(words[i]);
        break;
      }
    }
  }

  for (i = 0; i < board.length; ++i) {
    for (j = 0; j < board[i].length; ++j) {
      pending.forEach(function (word) {
        if (
          board[i][j] === word[word.length - 1] &&
          DFS(board, i, j, word, word.length - 1, -1)
        ) {
          valid.add(word);
          pending.delete(word);
        }
      });
      if (pending.size === 0) break;
    }
  }

  return Array.from(valid);
};
