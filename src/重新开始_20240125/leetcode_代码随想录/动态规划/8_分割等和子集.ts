function canPartition(nums: number[]): boolean {
  //[1,5,11,5]
  const sum: number = nums.reduce((pre, cur) => pre + cur);
  if (sum % 2 === 1) return false; //如果总和是奇数，没必要继续分了
  //转换为0-1背包问题：
  //weightArr = nums
  //valueArr = nums
  //背包容量 = sum/2
  //goodsArr = nums
  //用二维数组的方式解决
  const bagSize: number = sum / 2;
  const weightArr: number[] = nums;
  const valueArr: number[] = nums;

  //初始化dp 横轴数量是物品数量，纵轴数量是背包大小
  //本来应该第0列全部赋值为0  这里给数组全部赋0是为了方便操作
  const dp = new Array(nums.length)
    .fill(0)
    .map((_) => new Array(bagSize + 1).fill(0));

  //然后给第0行赋值，因为dp[i][j]会用到dp[i-1][j]
  for (let j = 0; j <= bagSize; j++) {
    dp[0][j] = j >= nums[0] ? nums[0] : 0;
  }

  for (let i = 1; i < nums.length; i++) {
    //先遍历物品
    for (let j = 0; j <= bagSize; j++) {
      //再遍历背包容量
      if (j - weightArr[i] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - weightArr[i]] + valueArr[i]
        );
      }
    }
  }
  console.log(dp);
  return dp[nums.length - 1][bagSize] === bagSize;
}
