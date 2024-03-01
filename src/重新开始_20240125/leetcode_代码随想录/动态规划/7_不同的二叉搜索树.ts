function numTrees(n: number): number {
  //也是动态规划，每个子状态都可以复用
  //   dp[i]表示由1到i，恰好i个节点组成的二叉搜索树有dp[i]种
  const dp: number[] = [];
  //观察dp[3]发现dp[3]由： 1. 根节点为1，右子树是节点数为2的二叉搜索树
  //                      2. 根节点为2, 左右节点各为节点数为1的二叉搜索树
  //                      3. 根节点为3，左子树是节点数为2的二叉搜索树
  //dp[3] = 1*dp[2] + dp[1]*dp[1] + dp[2]*1
  //dp[4] = 1*dp[3] + dp[1]*dp[2] + dp[2]*dp[1] + dp[3]*1
  //初始化：
  dp[0] = 1; //方便后继递推公式计算
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = 0;
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
}
