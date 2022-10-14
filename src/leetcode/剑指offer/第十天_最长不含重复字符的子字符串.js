/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }
  //动态规划
  let hash = new Map();
  //dp[j]表示以s[j]结尾的最长的不重复子字符串长度
  let dp = new Array();
  dp[0] = 1;
  hash.set(s[0], 0);

  let i = 0;
  let j = 1;
  let max = 1;

  for (; j < s.length; j++) {
    if (hash.has(s[j])) {
      //如果hash中存在s[j]
      i = Math.max(hash.get(s[j]), i);
      dp[j] = j - i;
    } else {
      //如果不存在
      dp[j] = dp[j - 1] + 1;
    }
    hash.set(s[j], j);
    max = Math.max(dp[j], max);
  }
  return max;
};
