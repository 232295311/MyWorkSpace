/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  const str = s.replace(/\s/g, "%20");
  console.log(str);
  return str;
};

test("测试把字符串里所有空格替换成%20 ", () => {
  expect(replaceSpace("We are happy")).toBe("We%20are%20happy");
});
