function longestConsecutive(nums: number[]): number {
  const set = new Set(nums); //去重 set也是一个hash表
  let res = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let curr = num;
      let currStreak = 1;

      while (set.has(curr + 1)) {
        //原本是对于每个数都要+1+1计算它的最长序列
        //然后加上了if(!set.has(num-1))就能减少遍历次数了，
        curr++;
        currStreak++;
      }
      res = Math.max(currStreak, res);
    }
  }
  return res;
}
