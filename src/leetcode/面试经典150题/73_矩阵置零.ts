/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  const visited = new Array<any>(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array<boolean>(n);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        visited[i][j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === true) {
        matrix[i].fill(0);
        for (let k = 0; k < m; k++) {
          matrix[k][j] = 0;
        }
      }
    }
  }
}
