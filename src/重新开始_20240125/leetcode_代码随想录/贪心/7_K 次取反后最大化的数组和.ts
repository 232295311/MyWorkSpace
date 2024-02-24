function largestSumAfterKNegations(nums: number[], k: number): number {
  //排序，然后从负数开始取反，将负数全部取为正数。如果k为0了，结束求和。
  //如果还有k，然后重新排序，从0开始取反，重复在最小的一个>=0的数字上取反，直到k为0直接求和；或者直到k为1取反后求值。
  nums.sort((a, b) => a - b);
  let minAbsNum = 0; //记录绝对值最小的数字的位置，取代第二次排序
  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
    if (Math.abs(nums[i]) < Math.abs(nums[minAbsNum])) {
      minAbsNum = i;
    }
  }
  //遍历完第一次了，如果此时还有k
  if (k > 0) {
    k = k % 2; //0或1
    if (k === 1) {
      nums[minAbsNum] = -nums[minAbsNum];
    }
  }
  return nums.reduce((a, b) => {
    return a + b;
  });
}
