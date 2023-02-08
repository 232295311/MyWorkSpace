/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let m = matrix.length;
  let n = matrix[0].length;

  let i = m - 1;
  let j = 0;
  while (i >= 0 && j < n) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
};
