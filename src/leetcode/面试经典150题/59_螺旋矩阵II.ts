function generateMatrix(n: number): number[][] {
  let res: number[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
  }
  //定义上下左右边界
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let count = 1;
  while (count <= n * n) {
    for (let j = left; j <= right; j++) {
      res[top][j] = count;
      count++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res[i][right] = count;
      count++;
    }
    right--;
    for (let j = right; j >= left; j--) {
      res[bottom][j] = count;
      count++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res[i][left] = count;
      count++;
    }
    left++;
  }
  return res;
}
