/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  //可以创建一个m*n的二维数组来辅助保存这一轮遍历过的细胞的状态，
  //但是我们选择不用，直接在原数组上进行修改
  // 11:这一轮活着，下一轮也活着  继续标记为1
  // 10:这一轮活着，下一轮死了    标记为3
  // 01:这一轮死了，下一轮活着    标记为2
  // 00:这一轮死了，下一轮也死了  继续标记为0

  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const count = countAlive(i, j);
      if (board[i][j] === 0 && count === 3) {
        board[i][j] = 2; //下一轮可以活
      } else if (board[i][j] === 1) {
        if (count < 2 || count > 3) {
          board[i][j] = 3;
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 1;
      }
      if (board[i][j] === 3) {
        board[i][j] = 0;
      }
    }
  }
  function countAlive(i: number, j: number): number {
    //定义8个方向，
    const DirectionArr = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    let count = 0;
    for (let [x, y] of DirectionArr) {
      const newX = i + x;
      const newY = j + y;
      if (newX < 0 || newX >= m || newY < 0 || newY >= n) {
        //超出边界的不要算
        continue;
      }
      if (board[newX][newY] === 1 || board[newX][newY] === 3) {
        count++;
      }
    }
    return count;
  }
}
