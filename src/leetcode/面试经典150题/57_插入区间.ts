function insert(intervals: number[][], newInterval: number[]): number[][] {
  // intervals已经是按照区间起始端点排序的
  const pivotStart = newInterval[0];
  const pivotEnd = newInterval[1];
  let res: number[][] = [];

  let index = 0;

  //左边
  while ( intervals[index][1] < pivotStart) {
    res.push(intervals[index]);
    index++;
  }

  //合并区间
  let startNum = pivotStart;
  let endNum = pivotEnd;
  while (index < intervals.length && intervals[index][0] <= endNum) {
    const interval = intervals[index];
    startNum = Math.min(interval[0], startNum);
    endNum = Math.max(interval[1], endNum);
    index++;
  }
  res.push([startNum, endNum]);

  //右边
  while (index < intervals.length) {
    res.push(intervals[index]);
  }

  return res;
}
