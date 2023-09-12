/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function isPalindrome(s: string): boolean {
  //先排除所有非字母字符
  s = s.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
