const tree = Array(31)
  .fill()
  .map((v, i) => i);

const traverse = (arr) => {
  let sum = 0;
  let i = 0;
  const widths = [];
  while (sum < arr.length) {
    const width = Math.pow(2, i);
    widths.push(width);
    sum = sum + width;
    i++;
  }
  const rows = [];
  while (widths.length) {
    const width = widths.pop();
    const current = arr.splice(-width, width);
    rows.push(current);
  }
  for (row of rows) {
    for (i in row) {
      if (row.length === 1) {
        row[i] = { val: row[i] };
      } else {
        if (i % 2 === 0) {
          row[i] = { val: row[i] };
        } else {
          row[i] = { val: row[i] };
        }
      }
    }
  }
  return rows;
};

console.log(traverse(tree));
