/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  //动态规划 状态定义：dp[i][j]表示从grid[0][0]开始到grid[i][j]结束，能获得的礼物的最大价值
  //状态转移方程：
  //dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]) + grid[i][j]
  const n = grid.length;
  const m = grid[0].length;
  let dp = new Array(n);
  //   dp.fill(new Array(m));
  // 创建二维数组不可以使用fill，原因在于此时fill(value)value指的是引用类型的地址，所用的数组将指向同一个地址，使得在修改某个数组时，所有的数组都改变了。
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) {
        dp[i][j] = grid[i][j];
        continue;
      }
      dp[i][j] =
        Math.max(j > 0 ? dp[i][j - 1] : 0, i > 0 ? dp[i - 1][j] : 0) +
        grid[i][j];
    }
  }
  return dp[n - 1][m - 1];
};
