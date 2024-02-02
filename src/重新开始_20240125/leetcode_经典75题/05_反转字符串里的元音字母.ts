/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function reverseVowels(s: string): string {
  //"反转"的意思是原来的元音字母排序0,1,2,3 反转后变成3,2,1,0
  //也就相当于“反转字符串”一般，用双指针即可
  const voWelCharSet = new Set([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U",
  ]);
  let i = 0;
  let j = s.length;
  let res = s.split("");
  while (i < j) {
    if (!voWelCharSet.has(s[i])) {
      i++;
    }
    if (!voWelCharSet.has(s[j])) {
      j--;
    }
    if (i < j && voWelCharSet.has(s[i]) && voWelCharSet.has(s[j])) {
      [res[i], res[j]] = [res[j], res[i]];
      i++;
      j--;
    }
  }
  //   console.log(res);
  return res.join("");
}
