/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  //把nums按从小到大的顺序排列，并且记录0的数量，
  //如果 没有重复的牌 并且，right-left<5则是顺子
  const sortedArr = nums.sort((a, b) => a - b);
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      continue;
    }
    if (nums[i] === nums[i - 1]) {
      return false;
    }
  }
  return sortedArr[sortedArr.length - 1] - sortedArr[zeroCount] < 5;
};
