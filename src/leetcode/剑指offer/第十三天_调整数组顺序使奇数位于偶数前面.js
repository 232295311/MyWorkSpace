/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let len = nums.length;
  let i = 0;
  let j = len - 1;
  while (i < j) {
    if (nums[i] % 2 === 1) {
      //i要指向偶数
      i++;
      continue;
    }
    if (nums[j] % 2 === 0) {
      // j要指向奇数
      j--;
      continue;
    }
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
  return nums;
};
