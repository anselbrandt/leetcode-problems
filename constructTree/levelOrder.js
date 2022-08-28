const tree = Array(31)
  .fill()
  .map((v, i) => i);

const toTree = (arr) => {
  if (arr.length === 1) return arr[0];
  const [head, ...rest] = arr;
  const nodes = rest.reduce(function (result, value, index, array) {
    if (index % 2 === 0)
      result.push({
        left: { val: array[index] },
        right: { val: array[index + 1] },
      });
    return result;
  }, []);
  const [first, ...last] = nodes;
  const btree = [{ val: head, ...first }, ...last];
  let mid = (btree.length - 1) / 2 - 1;
  while (mid >= 0) {
    const right = btree.pop();
    btree[mid].right = { ...btree[mid].right, ...right };
    const left = btree.pop();
    btree[mid].left = { ...btree[mid].left, ...left };
    mid--;
  }
  return btree[0];
};

console.log(toTree(tree).right);
