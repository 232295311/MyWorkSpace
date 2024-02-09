function isPerfectSquare(num: number): boolean {
  //判断num是不是完全平方数如 1,4,9,16
  // 求满足 √x<x/2 成立时x的取值————解得x>4时成立
  //所以当x>4时，我们可以在0~x/2的整数区间内找到它的完全算数平方根
  if (num === 1) {
    return true;
  }

  const rightEdge = Math.floor(num / 2);
  let left = 1;
  let right = rightEdge;
  // 1,2,3,4  8
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    }
  }
  return false;
}
