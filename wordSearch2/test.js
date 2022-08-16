// https://leetcode.com/submissions/detail/775073578/
// return all words on the board

const board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const words = ["oath", "pea", "eat", "rain", "hklf", "hf", "a"];
// const board = [["a"]];
// const words = ["a"];

const trie = (words) => {
  const dict = {};
  let current = dict;
  for (word of words) {
    for (char of [...word]) {
      if (!current[char]) current[char] = {};
      current = current[char];
    }
    current["word"] = word;
    current = dict;
  }
  return dict;
};

const search = (i, j, board, current, solutions = []) => {
  // ouut of bounds check
  if (board[i] === undefined || board[i][j] === undefined || !current) return;
  const letter = board[i][j];
  // match check and solution check (forward looking)
  // do not check for last node, allow to fail on next recursion
  if (current[letter] && current[letter]["word"]) {
    solutions.push(current[letter]["word"]);
    current[letter]["word"] = null;
  }
  // mark visited
  board[i][j] = 0;
  search(i + 1, j, board, current[letter], solutions);
  search(i - 1, j, board, current[letter], solutions);
  search(i, j + 1, board, current[letter], solutions);
  search(i, j - 1, board, current[letter], solutions);
  // reset visited
  board[i][j] = letter;
  // final return of pushed solutions
  if (solutions.length > 0) return solutions.flat();
};

var findWords = function (board, words) {
  const dict = trie(words);
  let current = dict;
  const results = [];
  for (i in board) {
    for (j in board[i]) {
      const result = search(+i, +j, board, current);
      if (result !== undefined) results.push(result);
    }
  }
  return results.flat();
};

console.log(findWords(board, words));
// console.log(JSON.stringify(trie(words), null, 2));
