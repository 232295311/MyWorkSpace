/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //动态规划
  // 状态定义: dp[i]表示以第i天为结尾，买卖该股票可以获得的最大利润
  // 初始状态
  let dp = [0];
  let min = prices[0]; //存最小成本

  for (let i = 1; i < prices.length; i++) {
    // 转移方程
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
    // maxProfit= Math.max(dp[i],maxProfit)
  }
  return dp.pop();
};
