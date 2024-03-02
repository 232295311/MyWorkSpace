function rob(nums: number[]): number {
  /**
   * 不能连着偷相邻的两家
   * 定义状态机：每家都有两个状态:
   * 1.被偷
   * 2.没被偷
   *
   * dp[i]：考虑下标i（包括i）以内的房屋，可以偷窃的最多金额为dp[i]。
   * dp[i][j]：j表示状态：0表示该家被偷，1表示该家不被偷
   * dp[i][0] = dp[i-1][0]  + nums[i]
   * dp[i][1] = Max(dp[i-1][1],dp[i-1][0])
   */
  const dp = new Array(nums.length).fill(0).map((_) => new Array(2));
  dp[0][0] = nums[0];
  dp[0][1] = 0;
  for (let i = 1; i < nums.length; i++) {
    dp[i][0] = dp[i - 1][1] + nums[i]; //这家被偷上家一定得不被偷
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0]); //这家不偷，
  }

  return Math.max(dp.at(-1)![0], dp.at(-1)![1]);
}
