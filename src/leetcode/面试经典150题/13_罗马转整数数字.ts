/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function romanToInt(s: string): number {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const nextChar = s[i + 1];
    const str = char + nextChar;
    if (map[str] !== undefined) {
      sum += map[str];
      i++; //多加一次，跳过下一位
      continue;
    }
    sum += map[char];
  }
  return sum;
}
