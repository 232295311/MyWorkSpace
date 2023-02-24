/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  [0,1,0,3,12]
var moveZeroes = function (nums) {
  //双指针 但是顺序不能乱。
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }
  return nums;
};
