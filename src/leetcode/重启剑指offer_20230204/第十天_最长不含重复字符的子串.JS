/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0; //记录最大子串长度
  let left = 0;
  let right = 0;
  let map = new Map(); //hash数据结构，记录已经遍历过的字符的最新位置
  while (right < s.length) {
    if (!map.has(s[right])) {
      max = Math.max(right - left + 1, max);
    } else {
      left = map.get(s[right]); //拿到记录中的重复字符的位置
    }
    map.set(s[right], right); //['a',0],['b',1]
    right++;
  }
  return max;
};
