function maxProfit(k: number, prices: number[]): number {
  //和上一题一样 最多可以交易k次，就有2*k个状态，
  /**
      0:无状态
      1：第一次交易，“持有”
      2：第二次交易，“不持有”
      ...
      k*2:第k次交易，“不持有”
  
      dp[i][0] = 0
      dp[i][1] = Math.max(dp[i-1][0]-price[i],dp[i-1][1])
      dp[i][2] = Math.max(dp[i-1][1]+price[i],dp[i-1][2])
  
      dp[i][k*2] = Math.max(dp[i-1][k*2-1]+price[i],dp[i-1][2*k])
       */
  const dp = new Array(prices.length)
    .fill(0)
    .map((_) => new Array(k * 2 + 1).fill(0)); //先全部初始化为0

  //初始化
  for (let j = 1; j < 2 * k; j += 2) {
    //再给所有奇数的dp[0][j]都赋值上-price[0]
    dp[0][j] = -prices[0];
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < 2 * k; j += 2) {
      dp[i][j] = Math.max(dp[i - 1][j - 1] - prices[i], dp[i - 1][j]); //j是奇数，持有状态
      dp[i][j + 1] = Math.max(dp[i - 1][j] + prices[i], dp[i - 1][j + 1]); //j+1是偶数，持有状态
    }
  }
  //   console.log(dp);
  return dp.at(-1).at(-1);
}
