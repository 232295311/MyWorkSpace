/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (obj[target - value] !== undefined) {
      return [obj[target - value], i];
    } else {
      obj[value] = i;
    }
  }
};
