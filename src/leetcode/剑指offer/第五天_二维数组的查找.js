/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let rowLength = matrix.length; //矩阵有多少行
  let colLength = matrix[0].length; // 矩阵有多少列
  let i = rowLength - 1; //行
  let j = 0; //列
  //从最底一行开始
  while (i >= 0 && j < colLength) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] === target) {
      return true;
    } else {
      j++;
    }
  }
  return false;
};
