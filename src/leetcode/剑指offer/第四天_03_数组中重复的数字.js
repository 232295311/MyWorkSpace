/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (hashMap[value]) {
      return value;
    } else {
      hashMap[value] = 1;
    }
  }
};
