function rob(nums: number[]): number {
  const n = nums.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(2); //创建一个二维dp数组，dp中每个元素都是长度为2的数组
  }
  // 动态规划，定义状态机，有偷和不偷两个状态，画出他们的转移关系，不偷能由上一天不偷或上一天偷过来，而偷只能由上一天不偷过来
  // dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]) //【0】代表今天不偷
  // dp[i][1] = dp[i-1][0]+nums[i] //【1】代表今天偷
  for (let i = 0; i < n; i++) {
    dp[i][0] = i > 0 ? Math.max(dp[i - 1][0], dp[i - 1][1]) : 0;
    dp[i][1] = i > 0 ? dp[i - 1][0] + nums[i] : nums[0];
  }
  console.log(dp);
  return Math.max(dp[n - 1][0], dp[n - 1][1]);
}
