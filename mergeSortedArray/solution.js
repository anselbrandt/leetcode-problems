const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0],
  m = 6,
  nums2 = [1, 2, 2],
  n = 3;
// [-1,0,0,1,2,2,3,3,3]

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (k > -1) {
    const a = nums1[i];
    const b = nums2[j];
    if (a > b || b === undefined) {
      nums1[k] = a;
      i--;
    } else {
      nums1[k] = b;
      j--;
    }
    k--;
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
