function mySqrt(x: number): number {
  //返回x的算数平方根，结果只保留 整数部分 ，小数部分将被 舍去 。
  //   求满足 x/2 > √x 成立时x的取值————解得x>4时成立
  //所以当x>4时，算数平方根的上限就是x/2了。
  //因此我们可以在0~x/2的区间中找到想要的算数平方根。
  if (x === 0) {
    return 0;
  }
  if (x < 4) {
    return 1;
  }
  const rightEdge = Math.floor(x / 2);
  let left = 2;
  let right = rightEdge;
  // 2,3,4  8
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }
  return right;
}
