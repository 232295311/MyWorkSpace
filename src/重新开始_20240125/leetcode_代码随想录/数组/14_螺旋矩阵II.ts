function generateMatrix(n: number): number[][] {
  //建立一个n*n的矩阵
  const arr: number[][] = [];
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }

  let counter = 1;

  //定义边界 每轮while循环都是按从左到右 从上到下 从右到左 从下到上这样顺序进行一圈模拟
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let top = 0;
  while (counter <= n * n) {
    //边界情况

    for (let j = left; j <= right; j++) {
      arr[top][j] = counter;
      counter++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      arr[i][right] = counter;
      counter++;
    }
    right--;
    for (let j = right; j >= left; j--) {
      arr[bottom][j] = counter;
      counter++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      arr[i][left] = counter;
      counter++;
    }
    left++;
  }
  return arr;
}
