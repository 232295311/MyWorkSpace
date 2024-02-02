/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function reverseWords(s: string): string {
  //   return s.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ");
  //双指针
  s = s.replace(/\s+/g, " ").trim();
  const res = s.split(" ");
  let i = 0;
  let j = res.length - 1;
  while (i < j) {
    [res[i], res[j]] = [res[j], res[i]];
    i++;
    j--;
  }
  return res.join(" ");
}
