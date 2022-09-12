const nums = [1, 3, 100];

var maximumGap = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  let max = 0;
  let i = 0;
  for (i; i < sorted.length; i++) {
    const diff = Math.abs(sorted[i] - sorted[i + 1]);
    if (diff > max) max = diff;
  }
  return max;
};
