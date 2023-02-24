/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  //动态规划？
  //状态转移方程：
  //dp[i] = i&1===1 ? dp[i-1]+1 : dp[i/2]
  let dp = [];
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
    dp[i] = (i & 1 === 1) ? dp[i - 1] + 1 : dp[i / 2];
  }
  return dp;
};
