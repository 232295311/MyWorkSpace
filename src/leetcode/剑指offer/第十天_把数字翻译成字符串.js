/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  //1个字符可能翻译成1个字符
  //2个字符可能翻译成1或2个字符，其中翻译成一个字符需要这两个字符小于26

  let str = String(num);
  let dp = new Array();
  dp[0] = 1;
  dp[1] = Number(str[0] + str[1]) < 26 && str[0] !== "0" ? 2 : 1;
  const length = str.length;

  for (let i = 2; i < length; i++) {
    if (Number(str[i - 1] + str[i]) < 26 && str[i - 1] !== "0") {
      dp[i] = dp[i - 2] * 2 + (dp[i - 1] - dp[i - 2]) * 1;
      // dp[i] = dp[i - 2] + dp[i - 1]
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp.pop();
};
