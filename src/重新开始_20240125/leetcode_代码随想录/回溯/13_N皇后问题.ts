function solveNQueens(n: number): string[][] {
  //每两个皇后之间不能 同行、同列、同斜角
  const res: string[][] = [];
  const matrix: string[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill("."); //matrix是n*n的棋盘 都补充'.'进去 代表没被放上皇后
  }
  backTracking(0);
  return res;
  function backTracking(currRow: number) {
    //每行都从0开始遍历，不需要startIndex。
    //但是需要currRow来代表当前已经完成了前多少行的任务
    if (currRow === n) {
      //递归终止条件
      res.push(matrix.map((item) => item.join("")));
      return;
    }

    for (let j = 0; j < n; j++) {
      if (isValid(matrix, currRow, j)) {
        matrix[currRow][j] = "Q";
        backTracking(currRow + 1);
        matrix[currRow][j] = "."; //回溯
      }
    }
  }
  function isValid(matrix, i: number, j: number): boolean {
    //判断在matrix中第i行第j列放上一个新的皇后后，是否合法

    //1.遍历第j列，看是否有同列的皇后  【不需要遍历i行，因为原递归函数里就已经在遍历i行了】
    for (let p = 0; p < n; p++) {
      if (matrix[p][j] === "Q") {
        return false;
      }
    }

    //2.遍历45°斜角 【不需要遍历斜左下方，因为i还在原递归函数里增加】
    for (let p = i, q = j; p >= 0 && q < n; p--, q++) {
      //往右上走(p--, q++)
      if (matrix[p][q] === "Q") {
        return false;
      }
    }

    //3.遍历135°斜角 【不需要遍历斜右下方，理由同上】
    for (let p = i, q = j; p >= 0 && q >= 0; p--, q--) {
      //往右上走(p--, q++)
      if (matrix[p][q] === "Q") {
        return false;
      }
    }
    return true;
  }
}
