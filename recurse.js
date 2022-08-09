const generate = (arr, count) => {
  if (count === 0) {
    return [...arr, 0];
  } else {
    return generate([...arr, count], count - 1);
  }
};

const result = generate([], 10);

console.log(result);

const recurse = (count, arr = []) => {
  if (count === 0) return arr;
  if (count % 2 === 0) return [...recurse(count - 1, [...arr, count])];
  return [...recurse(count - 1, [...arr])];
};

console.log(recurse(10));
