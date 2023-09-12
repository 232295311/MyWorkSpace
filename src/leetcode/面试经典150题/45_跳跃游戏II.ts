function jump(nums: number[]): number {
  //   if (nums.length === 1) {
  //     return 0;
  //   }
  //   let dp = [];
  //   for (let i = 0; i <= nums[0]; i++) {
  //     dp[i] = 1;
  //   }
  //   for (let i = 1; i < nums.length; i++) {
  //     if (dp[nums.length - 1] !== undefined) {
  //       break;
  //     }
  //     for (let j = i; j <= i + nums[i]; j++) {
  //       dp[j] = dp[j] ? dp[j] : dp[i] + 1;
  //     }
  //   }
  //   return dp.at(-1);
  //其实挨个跳就好，每次都取最能跳的位置去尝试
  let maxPosition = 0;
  let steps = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === end) {
      end = maxPosition;
      steps++;
    }
  }
}
