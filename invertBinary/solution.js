/*
   1
  /  \
 2    3
/ \   / \
4  5 6   7

   1
  /  \
 3    2
/ \   / \
7  6 5   4

*/

const tree = Array(7)
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

const root = toTree(tree);

var invertTree = function (root) {
  const tree = root;
  let current = tree;
  while (current) {
    const left = current.left;
    const right = current.right;
    current.left = right;
    current.right = left;
    current = current.next;
  }
  return tree;
};

console.log(invertTree(root));
