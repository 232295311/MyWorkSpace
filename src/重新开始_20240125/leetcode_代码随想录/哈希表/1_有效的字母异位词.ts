function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  //判断字符出现次数即可 因为只可能是小写字母
  const arr1: number[] = new Array(26).fill(0);
  const arr2: number[] = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr1[s[i].codePointAt(0)! - "a".codePointAt(0)!]++;
    arr2[t[i].codePointAt(0)! - "a".codePointAt(0)!]++;
  }
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
