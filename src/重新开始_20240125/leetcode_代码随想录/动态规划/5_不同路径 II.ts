function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  //只能向下或向右，遇到障碍物相当于直接隔断了整条路，
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp = new Array<number[]>(m);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array<number>(n);
  }

  let hasBarrier = false;
  for (let i = 0; i < dp.length; i++) {
    //第0列都要赋值为1，如果遇到障碍物，从那开始往后就一直为0
    if (obstacleGrid[i][0] === 1) {
      hasBarrier = true;
    }
    dp[i][0] = hasBarrier ? 0 : 1;
  }
  hasBarrier = false;
  for (let j = 0; j < dp.length; j++) {
    //第0行也要都赋值为1，如果遇到障碍物，从那开始往后就一直为0
    if (obstacleGrid[0][j] === 1) {
      hasBarrier = true;
    }
    dp[0][j] = hasBarrier ? 0 : 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][0] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}
