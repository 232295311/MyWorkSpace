function searchInsert(nums: number[], target: number): number {
  //如果找到target返回位置，如果找不到，返回改插入的位置
  let left = 0;
  let right = nums.length - 1;
  //左闭右闭
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (target === nums[mid]) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return left;
}
