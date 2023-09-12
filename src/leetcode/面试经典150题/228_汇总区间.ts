/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function summaryRanges(nums: number[]): string[] {
  let res: string[] = [];
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right + 1] === nums[right] + 1) {
      // 区间变大
      right++;
    } else {
      //记录结果
      if (right !== left) {
        res.push(`${nums[left]}->${nums[right]}`);
      } else {
        res.push(`${nums[left]}`);
      }
      //更新下一个区间
      right++;
      left = right;
    }
  }

  return res;
}
