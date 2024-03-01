function combinationSum4(nums: number[], target: number): number {
  //完全背包问题 求排列数。  //  先遍历物品再遍历背包容量 是求组合数
  const bagSize = target;
  const dp = new Array(bagSize + 1).fill(0);

  //初始化
  dp[0] = 1;

  for (let j = 1; j <= bagSize; j++) {
    //先遍历背包容量
    for (let i = 0; i < nums.length; i++) {
      //再遍历物品 这样才是求排列数。
      if (j >= nums[i]) {
        //如果此时背包容量 >= 遍历到的数字
        dp[j] = dp[j] + dp[j - nums[i]];
      }
    }
  }
  console.log(dp);
  return dp.at(-1);
}
