function integerBreak(n: number): number {
  //数学方法就是 尽量拆成3 最后一位可以是4
  //我们用动态规划的方法，跟烧绳子一样，定义dp[i]为正整数为i时，拆分乘积最大的值
  const dp = [0]; //dp[0]没有意义
  //初始化
  dp[1] = 1;
  dp[2] = 1;
  //dp[3]就是由dp[2]*1 || dp[1]*2 中的最大值组成
  //dp[4]就是由dp[3]*1 || dp[2]*2 || dp[1]*3 中的最大值组成
  //dp[5]就是由dp[4]*1 || dp[3]*2 || dp[2]*3 || dp[1]*4 中的最大值组成
  //但是以上每个乘法中，我们都不知道dp[4]去拆分大 还是 4直接用比较大，所以每个乘法都要多一轮比较
  // 递推公式：dp[i] = Max(dp[i]，)
  for (let i = 3; i <= n; i++) {
    dp[i] = 1; //先赋初始值为1
    for (let j = 1; i < i; j++) {
      const num1 = Math.max(dp[i - j], i - j); //不知道dp[2]大还是2大;不知道dp[5]大还是5大
      const num2 = num1 * j; // 把i拆成 dp[i-j]*j || (i-j)*j 算完成一轮
      dp[i] = Math.max(dp[i], num2); //dp[i]只记录最大的那个
    }
  }
  console.log(dp);
  return dp[n];
}
