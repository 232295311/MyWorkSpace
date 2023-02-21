/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  //动态规划 dp[i]表示以num[i]结尾的数字有多少种不同的翻译
  //状态转移方程：10<= num[i-1]+num[i] <26 ? dp[i] = dp[i-1] + dp[i-2] : dp[i]=dp[i-1]
  let dp = [];
  dp[0] = 1;
  let str = String(num);
  for (let i = 1; i < str.length; i++) {
    let sum = Number(str[i - 1] + str[i]);
    if (sum < 10 || sum > 25) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = dp[i - 1] + (dp[i - 2] || 1);
    }
  }
  return dp.pop();
};
