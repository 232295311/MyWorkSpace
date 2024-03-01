function change(amount: number, coins: number[]): number {
  //先排序再回溯会超时
  //这里当成完全背包问题解决
  const bagSize = amount;
  const dp = new Array(bagSize + 1);

  dp[0] = 1; //初始化
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= bagSize; j++) {
      //滚动数组，完全背包问题需要从前往后遍历
      //要注意这里定义的是零钱的组合方式，所以不要写快用max那一套
      dp[j] = dp[j] + dp[j - coins[i]];
    }
  }
  console.log(dp);
  return 1;
}
