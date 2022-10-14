/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 动态规划
  // dp[i-1]> 0 , dp[i] = dp[i-1]+nums[i]
  // dp[i-1]< 0 , dp[i] = nums[i]
  // dp[i] 代表以元素 nums[i]为结尾的连续子数组最大和。
  // 利用一个变量保存遍历到当前位置后，之前的所有子数组的和的最大值

  let max;
  let dp = new Array();

  dp[0] = nums[0];
  max = nums[0];
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
