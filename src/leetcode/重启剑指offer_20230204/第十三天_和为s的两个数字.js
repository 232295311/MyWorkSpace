/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  //因为是递增 所以可以用双指针
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j--;
      continue;
    } else if (nums[i] + nums[j] < target) {
      i++;
      continue;
    } else {
      res.push(nums[i], target - nums[i]);
      break;
    }
  }
  return res;
};
