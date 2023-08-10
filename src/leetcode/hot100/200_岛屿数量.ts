/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function numIslands(grid: string[][]): number {
  //岛屿数量，经典问题，考虑用dfs,bfs
  //遍历一遍矩阵，只要找到1就停下来开启dfs，向上下左右四个方向探索，如果是1就继续，如果不是就剪枝
  // 并且在dfs途中记录已经遍历过的位置，主遍历中不再遍历他们
  //最终记录有多少个岛屿

  // 创建一个m*n的visited矩阵
  let m = grid.length;
  let n = grid[0].length;

  let islandNum = 0;

  //直接遍历不就行了吗，遍历过的赋0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        helper(grid, i, j);
        islandNum++;
      }
    }
  }

  function helper(grid, i, j) {
    //递归终止条件
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") {
      return;
    }
    //dfs进行的操作
    grid[i][j] = "0";

    helper(grid, i, j + 1); //右
    helper(grid, i + 1, j); //下
    helper(grid, i, j - 1); //左
    helper(grid, i - 1, j); //上

    return;
  }

  return islandNum;
}
