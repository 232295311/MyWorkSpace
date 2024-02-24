function jump(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }
  //与上一题的不同是需要返回最小跳跃次数
  //可以直接开始跳，每一步都在当前可以跳到的范围内跳，如果还达不到终点，就多跳一步，重新统计可跳到的范围。
  let steps = 0;
  let maxPosition = 0; //当前能跳到的最大范围
  let nextPosition = 0; //下一步能跳到的最大范围

  for (let i = 0; i < nums.length; i++) {
    nextPosition = Math.max(nums[i] + i, nextPosition); //更新下一步能跳到的最大范围
    if (i === maxPosition) {
      //如果i遍历完当前能跳到的最大范围了，进行下一步
      steps++;
      if (nextPosition >= nums.length - 1) {
        break;
      }
      maxPosition = nextPosition;
    }
  }
  return steps;
}
