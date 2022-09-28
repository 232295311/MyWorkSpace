/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n);
};

test("测试左旋字符串 ", () => {
  expect(reverseLeftWords("lrloseumgh", 6)).toBe("umghlrlose");
});
