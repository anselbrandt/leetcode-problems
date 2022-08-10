// count number of islands of adjacent 1's, vert and horiz only

// 1
var arr = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

// 3
const arr2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

const clear = (i, j, arr) => {
  if (arr[i] === undefined || arr[i][j] === undefined || arr[i][j] === 0)
    return;
  arr[i][j] = 0;
  clear(i + 1, j, arr);
  clear(i - 1, j, arr);
  clear(i, j + 1, arr);
  clear(i, j - 1, arr);
};

const islands = (arr) => {
  let count = 0;

  for (i in arr) {
    for (j in arr[i]) {
      if (arr[i][j] === 1) {
        count++;
        clear(+i, +j, arr);
      }
    }
  }
  return count;
};

console.log(islands(arr));
