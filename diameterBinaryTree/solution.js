const root = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: { val: 5 } },
  right: { val: 3, right: { val: 6 }, left: { val: 7 } },
};

const levelorder = [1, 2, 3, 4, 5, 6, 7];

const search = (node) => {
  if (!node.left && !node.right) return 1;
  const left = node.left ? search(node.left) : 0;
  const right = node.right ? search(node.right) : 0;
  return left + right;
};

var diameterOfBinaryTree = function (root) {
  if (!root.left && !root.right) return 0;
  return search(root);
};

console.log(diameterOfBinaryTree(root));

0;
