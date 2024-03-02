function maxProfit(prices: number[]): number {
  /**
   * 定义状态机：对于同一只股票每天都可以是下面两个状态之一：
   * 0：持有
   * 1：不持有
   * dp[i][0] 表示第i天在“持有”股票的状态下，手里的现金数 如dp[0][0]一定为负：
   *    注意1：“持有”不代表“买入”
   * dp[i][1] 表示第i天在“不持有”股票的状态下，手里的现金数
   *    注意2：“不持有”不代表“卖出”
   *
   * dp[i][0] = Max(dp[i-1][0], -prices[i]) 要么昨天持有，要么今天买入
   * dp[i][1] = Max(dp[i-1][1], dp[i-1][0]+prices[i],) 要么昨天不持有，要么昨天持有今天卖出
   */

  const dp = new Array(prices.length).fill(0).map((_) => new Array(2));
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  console.log(dp);
  return dp.at(-1)[1];
}
