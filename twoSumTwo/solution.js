// 1 based array

const numbers = [1, 3, 4, 5, 7, 10, 11],
  target = 9;
// [3,4]

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum > target) right = right - 1;
    if (sum < target) left = left + 1;
    if (sum === target) return [left + 1, right + 1];
  }
};

console.log(twoSum(numbers, target));
