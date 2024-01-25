function maxSubArray(nums: number[]): number {
  // dp[i]：表示以 nums[i] 结尾 的 连续 子数组的最大和。
  const dp = new Array(nums.length - 1);
  dp[0] = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    //状态转移方程：如果dp[i-1]是负的，那就不需要它了
    dp[i] = dp[i - 1] <= 0 ? nums[i] : dp[i - 1] + nums[i];
    res = Math.max(res, dp[i]);
  }
  return res;
}
