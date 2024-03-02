function maxProfit(prices: number[]): number {
  /**
   * 继续从状态机入手，每天都可以是以下三个状态之一：
   * 0：“持有”
   * 1：“不持有”，但是在冷冻期
   * 2：“不持有”，但是不在冷冻期
   *
   * 那么1只可以由0过来，2可以由1或2过来，0可以由2或0过来
   */
  const dp = new Array(prices.length).fill(0).map((_) => new Array(3).fill(0));
  //初始化
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1]);
  }
  return Math.max(dp.at(-1)[1], dp.at(-1)[2]);
}
