function maxProfit(prices: number[]): number {
  // 先前已经用贪心解决过一次了，就是不错过任何一个上涨日，昨天买今天卖，每个上涨日都做交易。下降日就不动
  /**
   * 定义状态机：对于同一只股票每天都可以是下面两个状态之一：
   * 0：持有
   * 1：不持有
   * dp[i][0] 表示第i天在“持有”股票的状态下，手里的最大现金数
   *    注意1：“持有”不代表“买入”
   * dp[i][1] 表示第i天在“不持有”股票的状态下，手里的最大现金数
   *    注意2：“不持有”不代表“卖出”
   *
   * dp[i][0] = Max(dp[i-1][0], dp[i-1][1]-prices[i])
   * 1.昨天持有，今天继续保持现状
   * 2.昨天不持有，今天买入（这里不是-prices[i]的原因是股票可以交易无数次，手上的现金不一定是0，应该是昨天不持有时拥有的现金）
   * dp[i][1] = Max(dp[i-1][1], dp[i-1][0]+prices[i],) 要么昨天不持有，要么昨天持有今天卖出
   * 1. 昨天不持有，今天保持现状
   * 2. 昨天持有，今天卖出，得到利润。
   */
  const dp = new Array(prices.length).fill(0).map((_) => new Array(2));
  dp[0][0] = -prices;
  dp[0][1] = 0;
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  console.log(dp);
  return dp.at(-1)[1];
}
