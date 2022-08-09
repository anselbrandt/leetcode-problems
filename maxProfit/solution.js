// choose prices(on a given day) to buy and sell stock to maximize return

const prices = [7, 1, 5, 3, 6, 4];

// expected 5
// buy at 1, sell at 6

const maxProfit = (arr) => {
  const profit = [];
  for (i in arr) {
    for (j in arr.slice(i)) {
      profit.push(arr.slice(i)[j] - arr.slice(i)[0]);
    }
  }
  return Math.max(...profit);
};

console.log(maxProfit(prices));
