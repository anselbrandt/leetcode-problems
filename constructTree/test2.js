const tree = Array(31)
  .fill()
  .map((v, i) => i);

const toTree = (arr) => {
  const [head, ...rest] = arr;
  return rest.reduce(function (result, value, index, array) {
    // if (index % 2 === 0) result.push(array.slice(index, index + 2));
    if (index % 2 === 0)
      result.push({ left: array[index], right: array[index + 1] });
    return result;
  }, []);
};

console.log(toTree(tree));
