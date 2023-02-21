/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //动态规划  状态定义：dp[i]表示以i结尾的子数组中，最大和为多少
  //动态转移方程： dp[i-1]>0, dp[i] = dp[i-1] + nums[i];
  //              dp[i-1]<0, dp[i] = nums[i]
  let dp = [];
  let max = 0;
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
