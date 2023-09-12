/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
enum Direction {
  Right = 1,
  Down = 2,
  Left = 3,
  Up = 4,
}
function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  const m = matrix.length; //5
  const n = matrix[0].length; //5
  //定义四个边界
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  let left = 0;
  let count = m * n;
  while (count >= 1) {
    for (let j = left; j <= right && count >= 1; j++) {
      res.push(matrix[top][j]);
      count--;
    }
    top++; //填充完上边界了 修改上边界
    for (let i = top; i <= bottom && count >= 1; i++) {
      res.push(matrix[i][right]);
      count--;
    }
    right--; //填充完右边界了 修改边右界
    for (let j = right; j >= left && count >= 1; j--) {
      res.push(matrix[bottom][j]);
      count--;
    }
    bottom--; //填充完下边界了 修改下边界
    for (let i = bottom; i >= top && count >= 1; i--) {
      res.push(matrix[i][left]);
      count--;
    }
    left++; //填充完左边界了 修改左边界
  }
  return res;
}
