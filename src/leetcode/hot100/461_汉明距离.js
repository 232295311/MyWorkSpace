/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  //两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
  // 相当于异或起来，然后求这个数的1的数量
  let res = x ^ y;
  let count = 0;
  while (res > 0) {
    count = count + (res & 1);
    res = res >>> 1; //不能用n>>1 因为>>代表有符号位运算，当n大于2^31的时候容易出错
  }
  return count;
};
