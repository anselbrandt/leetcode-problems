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

const root = toTree(tree);

const root2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
  },
};

var diameterOfBinaryTree = function (root) {
  let max = 0;
  const search = (node) => {
    if (!node) return -1;
    const left = search(node.left);
    const right = search(node.right);
    max = Math.max(max, 2 + left + right);
    return 1 + Math.max(left, right);
  };
  search(root);
  return max;
};

console.log(diameterOfBinaryTree(root2));
