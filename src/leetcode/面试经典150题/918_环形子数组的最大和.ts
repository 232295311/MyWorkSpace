function maxSubarraySumCircular(nums: number[]): number {
  //动态规划 不用dp[i]了，省下空间
  //分两种情况： 1.最大子数组不成环：最大子数组和 = dp[i-1]<0?nums[i]:dp[i-1]+nums[i]
  //            2.最大子数组成环：  最大子数组和 = 数组总和-最小子数组和

  let maxSum = Number.MIN_SAFE_INTEGER; //最大子数组和
  let currMaxSum = 0; //以nums[i]结尾的最大子数组和的dp序列， 即dp[i]
  let minSum = Number.MAX_SAFE_INTEGER; //最小子数组和
  let currMinSum = 0; //以nums[i]结尾的最小子数组和的dp序列， 即dp'[i]
  let total = 0; //数组总和

  for (let i = 0; i < nums.length; i++) {
    currMaxSum = currMaxSum <= 0 ? nums[i] : currMaxSum + nums[i];
    maxSum = Math.max(maxSum, currMaxSum);

    currMinSum = currMinSum >= 0 ? nums[i] : currMinSum + nums[i];
    minSum = Math.min(minSum, currMinSum);

    total += nums[i];
  }
  // 极端情况：如果说这数组的所有数都是负数
  return maxSum < 0 ? maxSum : Math.max(maxSum, total - minSum);
}
