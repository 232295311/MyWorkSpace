/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function isAnagram(s: string, t: string): boolean {
  //遇到只有字母字符的，多想到用26个长度的数组计数 别他妈天天就想着用map计数 你个猪
  if (s.length !== t.length) return false;
  const resSet = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (const char of s) {
    resSet[char.charCodeAt(0) - base]++;
  }
  for (const char of t) {
    resSet[char.charCodeAt(0) - base]--;
  }
  return !resSet.some((value) => value !== 0);
}
