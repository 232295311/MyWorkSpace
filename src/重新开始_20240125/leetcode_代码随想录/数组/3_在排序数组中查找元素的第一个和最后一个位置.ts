function searchRange(nums: number[], target: number): number[] {
  //nums 是一个非递减数组 可能出现重复。
  //进行两次二分搜索，第一次找左边界。第二次找右边界。
  const res: number[] = [];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  res.push(nums[left] === target ? left : -1);
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  res.push(nums[right] === target ? right : -1);
  return res;
}
