/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //因为是递增数组，所以可以用双指针 每次都把sum和target做比较，
  let length = nums.length;
  let left = 0;
  let right = length - 1;
  let sum = nums[left] + nums[right];

  while (sum !== target) {
    if (sum > target) {
      right--;
    }
    if (sum < target) {
      left++;
    }
    sum = nums[left] + nums[right];
  }

  return [nums[left], nums[right]];
};
