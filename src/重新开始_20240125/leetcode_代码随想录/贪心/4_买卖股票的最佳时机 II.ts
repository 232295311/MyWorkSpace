function maxProfit(prices: number[]): number {
  //  只有一只股票！
  //  当天只有买股票或者卖股票的操作
  //  局部最优：收集每天的正利润，全局最优：求得最大利润。

  let res = 0;
  for (let j = 1; j < prices.length; j++) {
    //第一天买，第三天卖 等于 第一天买，第二天卖 + 第二天买，第三天卖
    //只要当天卖出能有正收益，就卖掉
    const profit = prices[j] - prices[j - 1];
    if (profit > 0) {
      res += profit;
    }
  }
  return res;
}
