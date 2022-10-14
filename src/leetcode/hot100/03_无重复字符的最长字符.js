/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let hashMap = {};
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] !== undefined) {
      //如果存在活动窗口里面，则
      let newLeftIndex = hashMap[s[i]] + 1;
      while (left < newLeftIndex) {
        hashMap[s[left]] = undefined;
        left++;
      }
      hashMap[s[i]] = i;
    } else {
      //如果不存在活动窗口里，则
      hashMap[s[i]] = i;
      max = Math.max(max, i - left + 1);
    }
  }
  return max;
};
