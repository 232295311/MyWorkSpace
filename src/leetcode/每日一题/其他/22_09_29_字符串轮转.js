/*
 * @Description: 字符串轮转后的字符串一定是两个s1相加的子字符串
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  if (s1.length === 0 && s2.length === 0) {
    return true;
  }
  if (s1.length !== s2.length) {
    return false;
  }

  return (s2 + s2).indexOf(s1) >= 0 ? true : false;
};
