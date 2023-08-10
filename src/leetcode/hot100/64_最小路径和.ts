function minPathSum(grid: number[][]): number {
  //经典动态规划
  const n = grid.length;
  const m = grid[0].length;
  let dp = new Array(n);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(m); //这里不能用.fill
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i > 0 && j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else if (j > 0 && i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }
  console.log(dp);
  return dp[n - 1][m - 1];
}
