function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]); //所有区间按左边界排序
  const res: number[][] = [];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      //如果这个区间的左边界 小于等于 上一个区间的右边界 说明可以合并
      intervals[i][0] = Math.min(intervals[i][0], intervals[i - 1][0]);
      intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1]);
    } else {
      //说明这个区间和上个区间不重叠 保存记录
      res.push(intervals[i - 1]);
    }
  }
  res.push(intervals.at(-1)!); //最后补充
  return res;
}
