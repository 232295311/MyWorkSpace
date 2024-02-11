function removeDuplicates(nums: number[]): number {
  // 非严格递增排列 原地删除重复项 顺序要一致 [0,0,1,1,1,2,2,3,3,4]
  let slow = 0;
  let fast = 1;
  while (fast < nums.length) {
    if (nums[fast] === nums[slow]) {
      fast++;
    } else {
      nums[slow + 1] = nums[fast];
      slow++;
    }
  }
  return slow;
}
