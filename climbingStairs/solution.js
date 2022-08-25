// optimize by storing intermediate results

const search = (steps, sum = 0, results = new Map()) => {
  if (sum > steps) return 0;
  if (sum === steps) return 1;
  if (results.has(sum)) return results.get(sum);
  const result =
    search(steps, sum + 1, results) + search(steps, sum + 2, results);
  results.set(sum, result);
  return result;
};

var climbStairs = function (n) {
  return search(n);
};

console.log(climbStairs(5));
