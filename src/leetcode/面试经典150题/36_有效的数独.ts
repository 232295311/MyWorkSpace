/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function isValidSudoku(board: string[][]): boolean {
  //题目条件：board.length == 9 &&board[i].length == 9
  const row = new Array(9); //9行
  const col = new Array(9); //9列
  const box = new Array(9); // 9个3*3的盒子
  for (let i = 0; i < 9; i++) {
    row[i] = new Array(10); //用于判断每行1-9是否已出现
    col[i] = new Array(10); //用于判断每列1-9是否已出现
    box[i] = new Array(10); //用于判断每个3*3盒子是否已经出现
  }

  //遍历9*9的矩阵
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        continue;
      }
      const num = board[i][j]; //5
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (row[i][num]) {
        return false;
      }
      if (col[j][num]) {
        return false;
      }
      if (box[boxNum][num]) {
        return false;
      }
      row[i][num] = true; //[0][5]==true 表示第0行 5已经出现过
      col[j][num] = true; //[0][5]==true 表示第0列 5已经出现过
      box[boxNum][num] = true; // [0][5]==true 表示在第0个盒子 5已经出现过
    }
  }
  return true;
}
