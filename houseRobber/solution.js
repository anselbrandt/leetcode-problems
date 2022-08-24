const nums = [2, 7, 9, 3, 1];
// 12
// max non-adjacent sum

var rob = function (nums) {
  let sum1 = 0,
    sum2 = 0;
  for (n of nums) {
    let temp = Math.max(n + sum1, sum2);
    sum1 = sum2;
    sum2 = temp;
  }
  return sum2;
};

console.log(rob(nums));
