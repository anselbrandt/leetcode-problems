const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = (arr, i = 0, total = 0) => {
  if (arr[i] === undefined) return total;
  return sum(arr, i + 1, total + arr[i]);
};

console.log(sum(arr));
