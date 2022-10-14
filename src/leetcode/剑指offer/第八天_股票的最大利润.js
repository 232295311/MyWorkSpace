/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minCost = Number.MAX_SAFE_INTEGER; //遍历过的数组中最低的价格
  let currPrice = 0; //当天的价格
  let profit = 0; //利润
  let dp = new Array(); //动态规划数组
  //动态规划 状态转移方程：i表示第i天,dp[i]表示第i天为止的最大利润。所以：
  //dp[i] = Max(dp[i-1],currPrice - minCost)

  dp[0] = 0;
  minCost = Math.min(minCost, prices[0]);

  for (let i = 1; i < prices.length; i++) {
    currPrice = prices[i];
    minCost = Math.min(minCost, currPrice);
    dp[i] = Math.max(dp[i - 1], currPrice - minCost);
  }
  return dp.pop();
};
