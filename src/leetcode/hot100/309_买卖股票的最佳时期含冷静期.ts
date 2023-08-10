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
  //动态规划 但是加了冷冻期，并且可以多次买卖
  //dp[i][0]表示 第i天是：不是由于卖出导致的不持股状态
  //dp[i][1]表示 第i天是：持股状态
  //dp[i][2]表示 第i天是：由于卖出导致的不持股状态
  //那么:
  //0可以转移到0和1，1可以转移到1和2,2只能转移到0
  //所以0可以由0和2来，1可以由0和1来，2只能由1来

  // dp[i][0] =  Math.max(dp[i-1][0],dp[i-1][2]) //上一天不持股，今天也不持股，或者上一天卖出，今天是冷冻期不持股。
  // dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i])//上一天持股，今天也持股；或者上一天不持股，今天买入
  // dp[i][2] = Math.max(dp[i-1][1]+prices[i]) //上一天持股，今天卖出

  const length = prices.length;
  let dp = new Array(length);
  for (let i = 0; i < length; i++) {
    dp[i] = []; //创建dp[][]
  }
  //初始化 第0天的状态各个状态机
  dp[0][0] = 0; //第0天不持股
  dp[0][1] = -prices[0]; //第0天买入
  dp[0][2] = 0; //第0天没办法卖出

  //状态转移方程
  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    dp[i][2] = dp[i - 1][1] + prices[i];
  }
  return Math.max(dp[length - 1][0], dp[length - 1][2]); //返回最后一天卖出或者最后一天不持股
};
