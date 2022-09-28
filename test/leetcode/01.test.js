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

test("测试两数之和 ", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
