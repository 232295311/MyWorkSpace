function maxProfit(prices: number[]): number {
  /**一样，先定义状态，最多可以交易5次，那每天都会有5个状态：
   * 0.还没进行操作
   * 1.第一次持有
   * 2.第一次不持有
   * 3.第二次持有
   * 4.第二次不持有
   *
   * dp[i][1] 表示第i天在“第一次持有”股票的状态下，手里的最大现金数
   * dp[i][2] 表示第i天在“第一次不持有”股票的状态下，手里的最大现金数
   * 。。。
   *
   * dp[i][1] = Max(dp[i-1][0]-prices[i] , dp[i-1][1])
   * dp[i][2] = Max(dp[i-1][1]+prices[i] , dp[i-1][2])
   * dp[i][3] = Max(dp[i-1][2]-prices[i] , dp[i-1][3])
   * dp[i][4] = Max(dp[i-1][3]+prices[i] , dp[i-1][4])
   **/
  const dp = new Array(prices.length).fill(0).map((_) => new Array(5));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[0][2] = 0; //2,3,4 三个无意义
  dp[0][3] = Number.MIN_SAFE_INTEGER;
  dp[0][4] = 0;
  for (let i = 1; i < prices.length; i++) {
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2]);
    dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3]);
    dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4]);
  }
  console.log(dp);
  return 5;
}
