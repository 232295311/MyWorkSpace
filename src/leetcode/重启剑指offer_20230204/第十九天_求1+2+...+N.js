/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  //短路效应，A || B，当A为true时不会再继续下去，直接返回
  //A && B，当A为false时不会再继续下去，直接返回。
  // js中 4 && 5 返回5;  0 && 5 返回0;
  return n && n + sumNums(n - 1);
};
