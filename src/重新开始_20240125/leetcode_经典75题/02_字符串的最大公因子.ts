function gcdOfStrings(str1: string, str2: string): string {
  //要求返回一个新字符串res，且res能被str1和str2整除
  // 容易联想到欧几里得算法（辗转相除法）：
  // ①欧几里得算法：用于计算两个非负整数a，b的最大公约数。
  // ②计算公式gcd(a,b) = gcd(b,a mod b)。
  // ③两个整数a,b的最大公约数：指能够同时被a,b整除的最大的正整数。
  // 所以这道题就转换为求str1和str2的“最大公约字符串”

  if (str1 + str2 !== str2 + str1) {
    //如果互相首尾相拼的字符串不相等，说明str1和str2之间不存在某个子字符串循环
    //则无解
    return "";
  }
  const m = str1.length;
  const n = str2.length;
  function gcd(a, b) {
    //欧几里得算法的实现 如a=10,b=6最终得到res=2
    if (a % b === 0) {
      return b;
    }
    return gcd(b, a % b);
  }
  return str1.substring(0, gcd(m, n));
}
