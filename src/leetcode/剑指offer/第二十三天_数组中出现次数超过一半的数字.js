/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 摩尔投票法
  let count = 1;
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === res) {
      count++;
    } else {
      count--;
      if (count === 0) {
        res = nums[i];
      }
    }
  }
  return res;
};
