/*
   1
  /  \
 2    3
/ \   / \
4  5 6   7

Inorder Traversal:      4 2 5 1 6 3 7
Preorder Traversal:     1 2 4 5 3 6 7
Postorder Traversal:    7 6 3 5 4 2 1
Breadth-First Search:   1 2 3 4 5 6 7
Depth-First Search:     1 2 4 5 3 6 7
*/

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

const root = toTree(tree);

const search = (node) => {};

var diameterOfBinaryTree = function (root) {};

console.log(diameterOfBinaryTree(root));
