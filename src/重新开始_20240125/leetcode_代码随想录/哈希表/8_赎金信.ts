function canConstruct(ransomNote: string, magazine: string): boolean {
  //map记录magazine每个字符出现次数
  const map = {};
  for (let char of magazine) {
    if (map[char] === undefined) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  for (let char of ransomNote) {
    if (map[char] === undefined) {
      //如果找不到，直接return
      return false;
    } else if (map[char] === 0) {
      //如果找到了,但已经不够用了
      return false;
    } else {
      //如果找到且大于0
      map[char]--;
    }
  }
  return true;
}
