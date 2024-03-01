function coinChange(coins: number[], amount: number): number {
  //完全背包问题
  const bagSize = amount;
  const dp = new Array(bagSize + 1).fill(Number.MAX_SAFE_INTEGER); //先全部填充一个大常数

  dp[0] = 0; //初始化第一行

  for (let i = 1; i < coins.length; i++) {
    for (let j = coins[i]; j <= bagSize; j++) {
      if (dp[j - coins[i]] === Number.MAX_SAFE_INTEGER) {
        continue;
      }
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }
  console.log(dp);
  return dp[bagSize] === Number.MAX_SAFE_INTEGER ? -1 : dp[bagSize];
}
