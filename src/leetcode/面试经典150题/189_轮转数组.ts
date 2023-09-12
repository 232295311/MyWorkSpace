/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // const a = nums.concat(nums).slice(nums.length - k, 2 * nums.length - k);
  // console.log(a);
  const reverse = (nums, start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };
  k %= nums.length; //有可能出现k比数组长度大的情况，记得先取余
  //先翻转
  nums.reverse();
  //然后截取翻转
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}
