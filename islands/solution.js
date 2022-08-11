var grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const search = (i, j, grid) => {
  if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === "0")
    return;
  grid[i][j] = "0";
  search(i + 1, j, grid);
  search(i - 1, j, grid);
  search(i, j + 1, grid);
  search(i, j - 1, grid);
};

var numIslands = function (grid) {
  let count = 0;
  for (i in grid) {
    for (j in grid[i]) {
      if (grid[i][j] === "1") {
        count++;
        search(+i, +j, grid);
      }
    }
  }
  return count;
};

console.log(numIslands(grid));
