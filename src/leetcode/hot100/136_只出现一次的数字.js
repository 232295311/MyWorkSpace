/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1. 任何数和自己做异或运算，结果为 0
  // 2. 任何数和 做异或运算，结果还是自己
  // 3. 异或运算满足交换律和结合律
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};
