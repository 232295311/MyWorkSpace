function findMinArrowShots(points: number[][]): number {
  //两个维度，气球有左边界和右边界，我们是根据左边界或者右边界射箭都不能达成最优，这时候就先考虑一个维度
  //按左边界开始从小到大排
  if (points.length === 1) {
    return 1;
  }
  points.sort((a, b) => {
    return a[0] - b[0]; //左边界小的在前面
  });

  let arcNum = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= points[i - 1][1]) {
      //如果我这一个气球的左边界 小于等于 上一个气球的右边界
      //说明重叠，这两个球谁的右边界更小，谁当新的最小右边界
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
    } else {
      //如果我这一个气球的左边界 大于 上一个气球的右边界
      //说明射不到我 得多一个箭才能射我
      arcNum++;
    }
  }
  return arcNum;
  /**  *  let i = 0;
   *  while (i < points.length) {
   *    //假设我们进入了一个气球的区域，即为[left,right]，那么我们遍历完这个区域，跳出之前
   *    //一定要给它射爆，那么这个区域需要的弓箭数至少为1，
   *    //如果在遍历这个区域的时候，遇到了重叠的气球，那么right将更新为更小的边界
   *    const left = points[i][0];
   *    let right = points[i][1];
   *    i++; //这里提前i++，要去判断下一个左边界最小的气球了
   *    arcNum++;
   *    for (let j = left; j <= right; j++) {
   *        //这样一个单位一个单位去挪太慢了！！！！！！！！！
   *      while (i < points.length && j === points[i][0]) {
   *        //如果当前遇到了重叠的气球
   *        right = Math.min(right, points[i][1]); //right将更新为更小的边界
   *        i++; //重叠的气球将被射爆跳过
   *      }
   *    }
   *  }
   *  return arcNum;
   */
}
