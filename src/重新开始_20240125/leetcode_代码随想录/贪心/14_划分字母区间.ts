function partitionLabels(s: string): number[] {
  //要尽可能多片段，但是要求每个字母只能出现在1个片段中
  const res: number[] = [];
  //可以向上一题一样做
  const intervals = getIntervals(s);

  intervals.sort((a, b) => a[0] - b[0]); //一样的，根据左边界从小到大排序
  let left = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      //如果我这个字母出现的左边界 小于 上个字母出现的右边界
      // 说明他们重叠 扩大这个重叠的方位
      intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1]);
    } else {
      //如果小于等于 不重叠，上面重叠的所有区间结算为1次
      res.push(intervals[i - 1][1] - left + 1);
      left = intervals[i][0];
    }
  }
  //结束循环 还得再来一次
  res.push(intervals.at(-1)![1] - left + 1);
  return res;
  function getIntervals(s: string): number[][] {
    //第一步，先遍历一遍，算出每个在s中出现过的字母的第一次出现和最后一次出现区间：“a”:[左边界，右边界]
    const hash = new Array(26);
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const hashIndex = char.charCodeAt(0) - "a".charCodeAt(0);
      if (hash[hashIndex] === undefined) {
        //第一次出现
        hash[hashIndex] = [i, i]; //[第一次出现，最后一次出现]
      } else {
        //不是第一次出现 更新右边界
        hash[hashIndex][1] = i;
      }
    }
    //第二步，删掉没有出现过的字母所占据的空位，<14 empty items>
    return hash.filter((item) => item);
  }
}
