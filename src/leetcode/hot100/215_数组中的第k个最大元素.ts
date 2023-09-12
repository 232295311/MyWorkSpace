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
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  //双指针啊傻逼 你在想什么
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[p0], nums[i]] = [nums[i], nums[p0]];
      if (p0 !== p1) {
        [nums[p1], nums[i]] = [nums[i], nums[p1]];
      }
      p0++;
      p1++;
    } else if (nums[i] === 1) {
      [nums[p1], nums[i]] = [nums[i], nums[p1]];
      p1++;
    }
  }
  
}
