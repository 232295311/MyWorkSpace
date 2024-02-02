/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function longestSubarray(nums: number[]): number {
  //也是滑动窗口嘛，相当于滑动窗口有限制条件：里面最多只能用1个0
  let left = 0;
  let right = 0;
  let maxRes = 0;
  let zeroCounter = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCounter++;
    }
    while (zeroCounter > 1) {
      if (nums[left] === 0) {
        zeroCounter--; //回到1
      }
      left++;
    }
    maxRes = Math.max(maxRes, right - left - zeroCounter + 1);
    right++;
  }
  return zeroCounter === 0 ? maxRes - 1 : maxRes;
}
