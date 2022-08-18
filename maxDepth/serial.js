const root = [3, 9, 20, null, null, 15, 7];

// expected 3

const sum = (length, total = 0, i = 0) => {
  let depth = i;
  if (total > length) return depth;
  if (total < length) return sum(length, total + Math.pow(2, i + 1), i + 1);
};

var maxDepth = function (root) {
  const length = root.length;
  return sum(length);
};

console.log(maxDepth(root));
