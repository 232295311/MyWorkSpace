/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  //双指针 不断换位即可 比较简单
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (nums[left] % 2 === 1 && left < right) {
      left++;
    }
    while (nums[right] % 2 === 0 && left < right) {
      right--;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
};
