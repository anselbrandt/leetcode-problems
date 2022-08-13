// return all words on the board

const board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const words = ["oath", "pea", "eat", "rain", "hklf", "hf"];
const expected = ["oath", "eat", "hklf", "hf"];

const trie = (words) => {
  const dict = {};
  let current = dict;

  for (word of words) {
    for (char of [...word]) {
      if (!current[char]) current[char] = {};
      current = current[char];
    }
    current["end"] = true;
    current = dict;
  }
  return dict;
};

const search = (i, j, board, current, temp = "", solutions = []) => {
  if (
    board[i] === undefined ||
    board[i][j] === undefined ||
    current[board[i][j]] === undefined
  )
    return;
  const letter = board[i][j];
  temp = temp + letter;
  if (current[letter] !== undefined && current[letter]["end"] !== undefined)
    solutions.push(temp);
  if (
    current[letter] !== undefined &&
    current[letter]["end"] !== undefined &&
    Object.keys(current[letter]).length === 1
  )
    return solutions;
  current = current[letter];
  board[i][j] = 0;
  const result =
    search(i + 1, j, board, current, temp, solutions) ||
    search(i - 1, j, board, current, temp, solutions) ||
    search(i, j + 1, board, current, temp, solutions) ||
    search(i, j - 1, board, current, temp, solutions);
  board[i][j] = letter;
  return result;
};

var findWords = function (board, words) {
  const dict = trie(words);
  let current = dict;
  const results = [];
  for (i in board) {
    for (j in board[i]) {
      const result = search(+i, +j, board, current);
      if (result) results.push(result);
    }
  }
  return Array.from(new Set(results.flat()));
};

console.log(findWords(board, words));
