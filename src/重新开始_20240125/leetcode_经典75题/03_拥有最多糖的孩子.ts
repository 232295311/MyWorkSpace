/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  // 题目可理解为求candies数组的最大值k，
  // 分别判断candies[i]+extraCandies是否小于最大值k。
  //求数组最大值
  const maxNum = Math.max(...candies);
  const res = new Array<boolean>(candies.length);

  for (let i = 0; i < maxNum; i++) {
    res[i] = candies[i] + extraCandies < maxNum ? false : true;
  }
  return res;
}
