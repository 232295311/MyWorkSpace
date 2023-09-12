/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  //顺时针旋转90度，相当于先沿对角线对称，在沿x轴对称
  const swap = (matrix, i, j, k, q) => {
    [matrix[i][j], matrix[k][q]] = [matrix[k][q], matrix[i][j]];
  };
  const n = matrix.length;
  const mid = Math.floor(n / 2);
  //沿对角线对称
  for (let i = 0; i < n - 1; i++) {
    //除了最后一行 每一行都要遍历
    for (let j = 0; j < n - i - 1; j++) {
      //
      swap(matrix, i, j, n - j - 1, n - i - 1);
    }
  }

  //沿水平中线对称
  for (let i = 0; i < mid; i++) {
    for (let j = 0; j < n; j++) {
      swap(matrix, i, j, n - i - 1, j);
    }
  }
}
