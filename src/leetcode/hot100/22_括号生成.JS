/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  //递归+回溯 深度优先遍历
  if (n === 1) {
    return ["()"];
  }
  let res = [];
  dfs(n, n, "", res);
  return res;
};

/**
 * @param {number} leftNum 左括号剩余数量
 * @param {number} rightNum 右括号剩余数量
 * @param {string} currStr 当前的由左括号和右括号组合而成的字符串
 * @param {string[]} res 存储结果的数组
 * @return {string[]}
 */
let dfs = (leftNum, rightNum, currStr, res) => {
  //递归终止条件
  //1.如果右括号数量小于左括号 起到剪枝的作用
  if (rightNum < leftNum) {
    return;
  }
  //2.如果左括号数量或者右括号数量小于0了，也不用继续了
  if (leftNum < 0 || rightNum < 0) {
    return;
  }
  //2.如果左右括号都为0，保存起当前的currStr
  if (leftNum === 0 && rightNum === 0) {
    res.push(currStr);
    return;
  }
  //递归进行的操作
  dfs(leftNum - 1, rightNum, currStr + "(", res);
  dfs(leftNum, rightNum - 1, currStr + ")", res);
};
