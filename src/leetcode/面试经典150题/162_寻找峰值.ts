/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function findPeakElement(nums: number[]): number {
  //先递增然后递减
  let left = 0;
  let right = nums.length - 1;

  //第二中写法 [left,right)
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
      return mid;
    }

    if (nums[mid] < nums[mid + 1]) {
      //说明更大的在右边
      left = mid + 1;
    } else {
      // 说明更大的在左边
      right = mid;
    }
  }
  return left;
}
