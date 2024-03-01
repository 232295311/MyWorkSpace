function numSquares(n: number): number {
  let counter = 1;
  const goods: number[] = []; //[1,4,9,16,25..]
  while (counter * counter <= n) {
    goods.push(counter * counter);
    counter++;
  }
  const goodsNum = goods.length;
  const bagSize = n;
  const dp = new Array(bagSize + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i < goodsNum; i++) {
    for (let j = goods[i]; j <= bagSize; j++) {
      dp[j] = Math.min(dp[j], dp[j - goods[i]] + 1);
    }
  }
  return dp.at(-1);
}
