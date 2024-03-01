function findTargetSumWays(nums: number[], target: number): number {
  //就是0-1背包问题的变种，每个元素从取或不取变成 正取或负取 内核是一样的
  const sum = nums.reduce((a, b) => a + b); //计算总和
  if (target > sum || target < -sum) {
    return 0;
  }
  const goodsNum = nums.length;
  const bagSize = sum * 2; //背包容量为2倍sum。其中[0,sum]是代表负数的[sum+1,2*sum]代表正数的
  const values = nums;
  // const weights = nums;

  //因为js里数组没有负数下标，所以将数组都往右移动一个sum长度。
  const dp = new Array(goodsNum).fill(0).map((_) => new Array(bagSize + 1));

  //下面为了方便理解，下标还是从负数开始
  //初始化 第0行 先全部赋值为0。
  for (let j = -sum; j <= sum; j++) {
    //如题目[1,1,1,1,1] j从-5到5
    dp[0][j + sum] = 0;
  }
  // 然后-nums[0]和+nums[0]的位置自增1
  dp[0][nums[0] + sum] += 1;
  dp[0][-nums[0] + sum] += 1;
  //开始全量DP，先遍历物品，再遍历背包容量，每个物品有取正或取负两种情况
  //状态转移方程：dp[i][j] = dp[i-1][j-value[i]] + dp[i-1][j+value[i]]
  //dp[i][j]表示：数组的第0~i个数可取正可取负，可以得到和为j的不同表达式数目。
  for (let i = 1; i < goodsNum; i++) {
    for (let j = -sum; j <= sum; j++) {
      //[j-value[i]] 和 [j+value[i]] 都要在[-sum,sum]中
      const left = j - values[i] >= -sum ? dp[i - 1][j - values[i] + sum] : 0;
      const right = j + values[i] <= sum ? dp[i - 1][j + values[i] + sum] : 0;
      dp[i][j + sum] = left + right;
    }
  }

  return dp[goodsNum - 1][target + sum];
}
