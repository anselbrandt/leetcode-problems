const nums = [4, 3, 2, 1, 2];
// [12,16,24,48,24]

var productExceptSelf = function (nums) {
  let l = 1;
  const left = nums.map((v) => {
    l = l * v;
    return l;
  });
  let r = 1;
  const right = nums
    .reverse()
    .map((v) => {
      r = r * v;
      return r;
    })
    .reverse();
  return nums.map((v, i) => {
    if (i === 0) return right[1];
    if (i === nums.length - 1) return left[nums.length - 2];
    return left[i - 1] * right[i + 1];
  });
};

console.log(productExceptSelf(nums));
