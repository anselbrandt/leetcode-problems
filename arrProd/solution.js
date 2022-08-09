// return an array such that answer[i] is a product of all elements except nums[i]

const nums = [1, 2, 3, 4];
// [24,12,8,6]

const arrprod = (arr) => {
  const results = [];
  for (i in arr) {
    const subarr = [...arr];
    subarr.splice(i, 1);
    const prod = subarr.reduce((a, b) => a * b);
    results.push(prod);
  }
  return results;
};

console.log(arrprod(nums));

// notes
// splice is an operation on the array
