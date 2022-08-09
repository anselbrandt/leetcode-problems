// Jump Problem

// pass
const arr1 = [2, 3, 1, 1, 4];
// fail
const arr2 = [3, 2, 1, 0, 4];
// pass
const arr3 = [3, 0, 5, 0, 0, 0, 0, 0];

const jump = (arr) => {
  let lastGoodIndex = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i + arr[i] >= lastGoodIndex) {
      lastGoodIndex = i;
    }
  }
  return lastGoodIndex === 0;
};

const result = jump(arr3);
console.log(result);
