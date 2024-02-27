function eraseOverlapIntervals(intervals: number[][]): number {
  //跟最少数量射箭问题一样
  intervals.sort((a, b) => {
    return a[0] - b[0]; //按左边界从小到大排序
  });

  let res = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > intervals[i - 1][1]) {
      //如果我这个区间的左边界在上个区间的右边界之内
      res++; //那我这个区间就要移除
      //   此时这个区间 vs 上个区间
      //        左边界 >=  左边界
      //        右边界 ？  右边界
      //更新右边界为更小的那个
      intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
    }
  }
  return res;
}
