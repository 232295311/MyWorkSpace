/*
 * @Descripttion:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

function sun(a, b) {
  return a + b;
}

test("测试 sun ", () => {
  expect(sun(1, 2)).toBe(3);
});
