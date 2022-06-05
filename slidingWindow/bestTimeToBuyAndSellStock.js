var maxProfit = function (prices) {
  let maxProfit = 0;
  let l = 0;
  let r = 1;
  while (r < prices.length) {
    let profit = prices[r] - prices[l];
    if (prices[r] < prices[l] && r != prices.length - 1) {
      l = r;
    }
    maxProfit = Math.max(maxProfit, profit);
    r++;
  }
  return maxProfit;
};
