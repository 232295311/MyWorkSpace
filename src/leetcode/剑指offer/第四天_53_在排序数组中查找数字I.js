/*
 * @Description: 排序数组就可以使用二分查找~
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  const rightIndex = left; //右边界
  if (rightIndex >= 0 && nums[rightIndex] !== target) {
    return 0; //如果
  }

  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  const leftIndex = right; //左边界
  return rightIndex - leftIndex - 1;
};
