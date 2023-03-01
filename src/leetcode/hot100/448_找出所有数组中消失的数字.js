/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  //如果新建一个hash表，然后遍历一遍存储下来，再遍历一遍可得。
  //但是题目要求空间复杂度为O(1)。
  //采用原地hash的方式
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1; //nums[i]出现过了，通过这条式子计算出要改动的下标位置
    if (nums[index] > 0) {
      //如果上面的数字大于0，那就把它变负数。
      nums[index] = -nums[index]; //把这个位置的数字变成负数，表示index+1出现过
    }
    //如果已经是负数了，那就没必要变了。
  }
  let res = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      res.push(j + 1);
    }
  }
  return res;
};
