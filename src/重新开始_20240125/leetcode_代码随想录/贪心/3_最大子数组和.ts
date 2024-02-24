function maxSubArray(nums: number[]): number {
  //[-2,1,-3,4,-1,2,1,-5,4]
  let resMaxSum = nums[0];
  const dp = [nums[0]]; //dp存目前到以第i位为结尾，最大的子数组和
  //状态转移方程 dp[i] = dp[i-1] >=0 ? dp[i-1]+nums[i] : nums[i]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] >= 0) {
      //说明第i-1位结尾的子数组是正收益，能加进去i
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }
    resMaxSum = Math.max(resMaxSum, dp[i]);
  }
  return resMaxSum;
}
