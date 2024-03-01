function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  //dp[i]定义：要爬到下标为i这一层，所需要的最小花费
  //要爬到楼梯顶，相当于要爬到下标为n这一层
  const dp = [0, 0]; //初状态定义 dp[0]=0 dp[1]=0,上这两层都不需要花费
  for (let i = 2; i <= n; i++) {
    const num1 = dp[i - 1] + cost[i - 1]; //一次可以上1个台阶
    const num2 = dp[i - 2] + cost[i - 2]; //或者上2个台阶
    dp[i] = Math.min(num1, num2); //状态转移方程
  }
  return dp[n];
}
