/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function longestOnes(nums: number[], k: number): number {
  //套模板写一个滑动窗口吧
  let left = 0;
  let right = 0;
  let zeroCounter = 0; //滑动窗口中0的个数
  let maxRes = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCounter++;
    }
    while (zeroCounter > k) {
      //此时区间不符合题目要求了，需要一直移动左指针
      if (nums[left] === 1) {
        left++;
      } else {
        zeroCounter--;
        left++;
      }
    }
    //如果是1，无事发生，right自然右移
    maxRes = Math.max(maxRes, right - left + 1);
    right++;
  }
  return maxRes;
}
