/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  //两次遍历，找到所有与边缘0相连的区域，对该区域标记后不做处理
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    //对所有在边缘位置的0开启dfs遍历
    for (let j = 0; j < n; j++) {
      if (
        board[i][j] === "O" &&
        (i === 0 || i === m - 1 || j === 0 || j === n - 1)
      ) {
        dfs(board, i, j);
      }
    }
  }
  console.log(board);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
      if (board[i][j] === "#") {
        board[i][j] = "O";
      }
    }
  }

  function dfs(board: string[][], i: number, j: number) {
    //递归终止条件 超出边界
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      board[i][j] === "X" ||
      board[i][j] === "#"
    ) {
      return;
    }
    if (board[i][j] === "O") {
      board[i][j] = "#";
    }
    dfs(board, i - 1, j); //上
    dfs(board, i, j + 1); //右
    dfs(board, i + 1, j); //下
    dfs(board, i, j - 1); //左
  }
}
