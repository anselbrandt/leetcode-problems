const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

var inorderTraversal = function (root) {
  const result = [];
  const search = (root) => {
    if (!root) return;
    search(root.left);
    result.push(root.val);
    search(root.right);
  };
  search(root);
  return result;
};

console.log(inorderTraversal(root));
