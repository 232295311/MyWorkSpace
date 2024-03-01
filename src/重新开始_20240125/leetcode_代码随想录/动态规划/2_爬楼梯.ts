function climbStairs(n: number): number {
  const dp: number[] = [];
  dp[0] = 0; //无意义，占位
  dp[1] = 1; //爬上1级台阶只有1种爬法
  dp[2] = 2; //爬上2寄台阶有2种爬法
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; //爬上第n级台阶的方法由：爬上[n-1]级台阶的方法+爬1级台阶
    //                                                   +爬上[n-2]级台阶的方法+爬2级台阶
  }
  return dp[n];
}
