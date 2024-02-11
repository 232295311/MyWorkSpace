function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  const m = matrix.length; //4
  const n = matrix[0].length; //5
  //定义四个边界
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  let left = 0;
  let count = m * n;
  while (count >= 1) {
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    for (let j = right; j >= left; j--) {
      res.push(matrix[bottom][j]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
}
