/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  while (b) {
    // 进位，二进制向左移动1位
    const c = (a & b) << 1;
    // a和b做或运算，不含进位的运算
    a ^= b;
    // 将进位之后的结果赋值给b
    b = c;
  }
  return a;
};
