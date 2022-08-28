const tree = Array(31)
  .fill()
  .map((v, i) => i);

const toTree = (arr) => {
  if (arr.length === 1) return arr[0];
  let mid = Math.floor(arr.length / 2) - 1;
  while (mid >= 0) {
    const right = arr.pop();
    const left = arr.pop();
    arr[mid] = { val: arr[mid], left, right };
    mid--;
  }
  return arr[0];
};
console.log(toTree(tree));
