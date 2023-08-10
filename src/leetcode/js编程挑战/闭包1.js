/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let currNum = n - 1;
  return function () {
    return currNum + 1;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
