/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;
  let i = m - 1;
  let j = 0;
  while (i >= 0 && j < n && target !== matrix[i][j]) {
    if (target < matrix[i][j]) {
      i--;
      continue;
    }
    if (target > matrix[i][j]) {
      j++;
      continue;
    }
  }
  return i >= 0 && j < n && target === matrix[i][j];
}
