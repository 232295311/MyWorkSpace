/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function sortedSquares(nums: number[]): number[] {
  //先平方再排序 O(nlogn)
  const res: number[] = [];
  let i = 0;
  let j = res.length - 1;
  while (i < j) {
    if (Math.abs(nums[i]) < Math.abs(nums[j])) {
      res.push(nums[j] ^ 2);
      j--;
    } else {
      res.push(nums[i] ^ 2);
      i++;
    }
  }
  //此时i=j 最后一个补上
  res.push(nums[i] ^ 2);
  return res.reverse();
}
