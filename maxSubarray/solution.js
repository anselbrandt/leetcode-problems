const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// expected 6
// [4,-1,2,1]

const nums2 = [5, 4, -1, 7, 8];
// expected 23

const maxSub = (arr) => {
  const results = [];
  for (i in arr) {
    for (j in arr.slice(i)) {
      const subslice = arr.slice(i).slice(0, arr.slice(i).length - 1 - j);
      const sum = subslice.reduce((a, b) => a + b, 0);
      if (subslice.length > 0) results.push([sum, subslice]);
    }
  }
  const sorted = results.sort((a, b) => b[0] - a[0]);
  return sorted[0];
};

console.log(maxSub(nums));
