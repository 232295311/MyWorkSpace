function maxProfit(prices: number[], fee: number): number {
  /**
   * 一样的，每天都有两个状态
   * 0：持有
   * 1：不持有
   */
  const dp = new Array(prices.length).fill(0).map((_) => new Array(2).fill(0));
  dp[0][0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee); //每次卖出多收一次手续费
  }

  return Math.max(...dp.at(-1));
}
