/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]); //根据右边界从小到大进行排序

  //贪心算法
  let res = 1;
  let pivot = points[0][1]; //这就是第一根针射出的位置

  //将射爆的都移出就好了
  for (let [start, end] of points) {
    if (start <= pivot) {
      //射爆的
      continue;
    } else {
      //第一个没有射爆的 更新pivot
      pivot = end;
      res++;
    }
  }
  return res;
}
