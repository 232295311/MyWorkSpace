/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const rowLenth = grid.length; //数组有多少行
  const colLenth = grid[0].length; //数组有多少列
  let dp = new Array();
  for (let i = 0; i < rowLenth; i++) {
    dp.push(new Array());
  }
  //以上新建一个长度为rowlenth的二维数组
  //动态规划
  // dp[i][j] = Max(dp[i-1][j],dp[i][j-1]) + grid[i][j]
  // dp[0][0] = grid[0][0]
  for (let i = 0; i < rowLenth; i++) {
    for (let j = 0; j < colLenth; j++) {
      const topNum = i - 1 >= 0 ? dp[i - 1][j] : 0;
      const leftNum = j - 1 >= 0 ? dp[i][j - 1] : 0;
      dp[i][j] = Math.max(topNum, leftNum) + grid[i][j];
    }
  }
  return dp[rowLenth - 1][colLenth - 1];
};
