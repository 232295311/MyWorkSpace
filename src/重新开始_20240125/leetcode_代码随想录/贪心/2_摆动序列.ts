function wiggleMaxLength(nums: number[]): number {
  if (nums.length === 1) {
    return nums.length; //仅有一个元素或者含两个不等元素的序列也视作摆动序列。
  }
  //指针i从第一个数开始遍历数组，目标是找下一个不相同的数字，记录变化的趋势是变大还是变小，
  //找到后，指针i指向新找到的数，观察趋势：
  //如果是变大，下个数字就要找变小的，在找的过程中如果遇见比指针i指的数字更大的数字，指针i也要更新指向更大的数字
  //如果是变小，下个数字就要找变大的，在找的过程中如果遇见比指针i指的数字更小的数字，指针i也要更新指向更小的数字

  let res = 1;
  let preDiff = 0; //表示之前的趋势，>0代表变大，小于0代表变小。 相当于i-1和i-2之间的趋势
  let currDiff = 0; //表示i和i-1之间的趋势，>0代表变大，小于0代表变小  相当于i和i-1之间的趋势
  for (let i = 1; i < nums.length; i++) {
    //从1开始遍历
    currDiff = nums[i] - nums[i - 1];
    if ((preDiff >= 0 && currDiff < 0) || (preDiff <= 0 && currDiff > 0)) {
      res++;
      preDiff = currDiff;
    }
  }
  return res;
}
