/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function minSubArrayLen(target: number, nums: number[]): number {
  let i = 0;
  let j = 0;
  let sum = nums[0];
  let res = Number.MAX_SAFE_INTEGER;
  while (j < nums.length) {
    if (sum < target) {
      j++;
      sum += nums[j] || 0;
    } else {
      res = Math.min(res, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}
