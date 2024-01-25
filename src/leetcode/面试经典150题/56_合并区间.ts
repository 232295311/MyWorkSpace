/*
 * @Description: 
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function merge(intervals: number[][]): number[][] {
  intervals.sort((v1, v2) => v1[0] - v2[0]); //根据区间起点排序
  let res: number[][] = [];
  for (let [start, end] of intervals) {
    //如果res里面没有元素或者
    // 当前start超过了res里栈顶元素的end，表示区间没有重叠
    if (res.length === 0 || start > res.at(-1)![1]) {
      res.push([start, end]);
    } else {
      const popItem = res.pop();
      res.push([popItem![0], end]);
    }
  }
  return res
}
