/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function canJump(nums: number[]): boolean {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= res) {
      res = Math.max(res, i + nums[i]);
      console.log(res);
    }
  }
  return true;
}
