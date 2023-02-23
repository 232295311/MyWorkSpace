/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //容易想到的是hash结构存每个数字出现的次数
  //这里用摩尔投票法，更省空间
  let candidate = nums[0]; //候选人
  let count = 1; //候选人的票数，如果归0时，则更换首选人
  nums.forEach((value, index) => {
    if (value === candidate) {
      count++;
    } else {
      count--;
      if (count === 0) {
        candidate = value;
        count = 1;
      }
    }
  });
  return candidate;
};
