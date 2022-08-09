// target sum
const sum = 9;
const arr = [2, 7, 11, 15];
// [0, 1] indices of ints

const twosum = (arr, sum) => {
  const store = new Map();

  for (i in arr) {
    const target = sum - arr[i];
    const visited = store.has(target);
    if (visited) {
      return [+i, +store.get(target)];
    } else {
      store.set(arr[i], i);
    }
  }
};

console.log(twosum(arr, sum));
