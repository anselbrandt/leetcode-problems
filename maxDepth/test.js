//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = [3, 9, 20, null, null, 15, 7];

// expected 3

const tree = {
  val: 3,
  left: {
    val: 9,
    left: {
      val: null,
    },
    right: {
      val: null,
    },
  },
  right: {
    val: 30,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};

const search = (node, depth = 0) => {
  if (node === undefined || node === null) return depth;
  return Math.max(search(node.left, depth + 1), search(node.right, depth + 1));
};

var maxDepth = function (root) {
  return search(root);
};

console.log(maxDepth(tree));
