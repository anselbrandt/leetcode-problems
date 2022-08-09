const sum = 9;
const arr = [2, 7, 11, 15];
// [0, 1]

const twoSum = (arr, sum) => {
  const store = new Map();
  let result = [];
  for (i in arr) {
    const v = arr[i];
    const target = sum - v;
    const prev = store.has(target);
    if (prev) return [+i, store.get(target)];
    store.set(v, +i);
  }
};

console.log(twoSum(arr, sum));
