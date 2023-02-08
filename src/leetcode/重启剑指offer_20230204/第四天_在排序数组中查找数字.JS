/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //分别进行两次二分查找，找到左边界和右边界
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  const rightEdge = right;
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
  const leftEdge = right;
  return rightEdge - leftEdge;
};
