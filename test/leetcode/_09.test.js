/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  const dp = new Array(k + 1).fill(0);
  dp[1] = 1;
  let p3 = 1,
    p5 = 1,
    p7 = 1;
  for (let i = 2; i <= k; i++) {
    const num3 = dp[p3] * 3,
      num5 = dp[p5] * 5,
      num7 = dp[p7] * 7;
    dp[i] = Math.min(Math.min(num3, num5), num7);
    if (dp[i] === num3) {
      p3++;
    }
    if (dp[i] === num5) {
      p5++;
    }
    if (dp[i] === num7) {
      p7++;
    }
  }
  return dp[k];
};

test("测试第k个丑数 ", () => {
  expect(getKthMagicNumber(251)).toBe(3215625);
});
