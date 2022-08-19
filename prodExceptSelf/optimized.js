const nums = [1, 2, 3, 4, 1, 2];
// [48,24,16,12,48,24]

var productExceptSelf = function (nums) {
  let l = 1;
  const left = nums.map((v) => {
    l = l * v;
    return l;
  });
  let r = 1;
  // build right side while calculating solution
};

console.log(productExceptSelf(nums));
