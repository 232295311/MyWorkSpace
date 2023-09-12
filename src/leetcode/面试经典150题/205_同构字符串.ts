function isIsomorphic(s: string, t: string): boolean {
  //把s和t都转换成a1b2c3等方式？
  //题目条件：t.length == s.length
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] === undefined) {
      map1[s[i]] = t[i];
      map2[t[i]] = s[i];
    } else {
      //如果遇到出现过的字符，检查这个字符的对应是否和t[i]一致，如果不是，则返回false
      if (map1[s[i]] !== t[i]) {
        return false;
      }
    }
  }
  return true;
}
