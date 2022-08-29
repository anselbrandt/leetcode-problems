const tree = Array(31)
  .fill()
  .map((v, i) => i);

const toTree = (arr) => {
  if (arr.length === 1) return arr[0];
  let i = 0;
  let sum = 0;
  let width = 0;
  const length = tree.length;
  while (sum < length) {
    width = Math.pow(2, i);
    sum = sum + width;
    i++;
  }
  const lastRow = sum - width - 1;
  const pre = arr.map((val, i) => {
    if (i > lastRow) {
      return { val: val };
    } else {
      return val;
    }
  });
  let mid = Math.floor(pre.length / 2) - 1;
  while (mid >= 0) {
    const right = pre.pop();
    const left = pre.pop();
    pre[mid] = { val: pre[mid], left, right };
    mid--;
  }
  return pre[0];
};

console.log(JSON.stringify(toTree(tree), null, 2));
