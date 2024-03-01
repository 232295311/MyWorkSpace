function lastStoneWeightII(stones: number[]): number {
  //每次都排序，排序后双指针从两边开始碰撞 不行！
  //转换为0-1背包问题：尽量让石头分成重量相同的两堆，相撞之后剩下的石头最小，这样就化解成01背包问题了。
  //物品重量 stones[i]
  //物品价值 stones[i]
  //背包容量 sum/2

  const sum = stones.reduce((pre, curr) => pre + curr);
  const bagSize: number = Math.floor(sum / 2);
  const goodsNum = stones.length;
  const dp = new Array(goodsNum)
    .fill(0)
    .map((_) => new Array(bagSize + 1).fill(0));
  //上面初始化好了第0列 现在初始化第0行
  for (let j = 0; j <= bagSize; j++) {
    dp[0][j] = j >= stones[0] ? stones[0] : 0;
  }

  for (let i = 1; i < goodsNum; i++) {
    //先遍历物品
    for (let j = 0; j <= bagSize; j++) {
      //再对每个物品遍历背包容量
      if (j - stones[i] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i]);
      }
    }
  }

  return sum - dp[goodsNum - 1][bagSize] * 2;
}
