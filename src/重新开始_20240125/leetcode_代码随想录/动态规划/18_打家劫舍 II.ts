/**
 * 环状排列 意味着第一个房子和最后一个房子中 只能选择一个偷窃，
 * 因此可以把此 环状排列房间 问题约化为两个 单排排列房间 子问题：
 * 在不考虑第一个房子的情况下，最大金额是p1
 * 在不考虑最后一个房子的情况下，最大金额是p2
 * (如果既不偷第一个也不偷最后一个呢？其实上面两种情况已经包含了这个情况 不考虑≠不偷窃)
 */
function rob(nums: number[]): number {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  const p1 = myRob(nums.slice(1));
  const p2 = myRob(nums.slice(0, nums.length - 1));
  return Math.max(p1, p2);
}

function myRob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp.at(-1);
}
