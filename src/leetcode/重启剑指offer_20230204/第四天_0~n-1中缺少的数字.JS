/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //递增数组，想到二分搜索
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === mid) {
      left = mid + 1;
    } else if (nums[mid] > mid) {
      right = mid - 1;
    }
  }
  return left;
};
