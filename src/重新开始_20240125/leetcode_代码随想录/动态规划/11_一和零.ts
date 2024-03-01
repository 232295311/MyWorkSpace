function findMaxForm(strs: string[], m: number, n: number): number {
  //三维DP 不会滚动数组的人有难了 哈哈哈
  //   dp[i][j][k]代表前0~k个字符串任取，能够使用“i个0”和“j个1”的子集的最大数量
  const length = strs.length;
  const dp = new Array(m + 1)
    .fill(0)
    .map((_) => new Array(n + 1).fill(0).map((_) => new Array(length).fill(0)));
  //3维数组
  //我们可以把坐标[i,j]看成地基，k看成一层一层纸，堆上去。这里先初始化第一层
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      //初始化k=0的时候的第一层 满足0,1最低需求的i,j都赋值为1
      const [zeroNum, oneNum] = countZeroAndOneNum(strs[0]);
      if (i - zeroNum >= 0 && j - oneNum >= 0) {
        dp[i][j][0] = 1;
      } else {
        dp[i][j][0] = 0;
      }
    }
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 1; k < length; k++) {
        // k从第1层开始 状态需要与上一层的k比较
        const [zeroNum, oneNum] = countZeroAndOneNum(strs[k]);
        //状态转移方程:dp[i][k][k] = Max(dp[i][j][k-1], dp[i-zero][j-one][k-1]+1)
        if (i - zeroNum >= 0 && j - oneNum >= 0) {
          dp[i][j][k] = Math.max(
            dp[i][j][k - 1],
            dp[i - zeroNum][j - oneNum][k - 1] + 1
          );
        } else {
          dp[i][j][k] = dp[i][j][k - 1];
        }
      }
    }
  }
  //   console.log(dp);
  return dp[m][n][length - 1];
  function countZeroAndOneNum(s: string): [number, number] {
    let zeroNum = 0;
    let oneNum = 0;
    for (let char of s) {
      if (char === "0") {
        zeroNum++;
      } else if (char === "1") {
        oneNum++;
      }
    }
    return [zeroNum, oneNum];
  }
}
