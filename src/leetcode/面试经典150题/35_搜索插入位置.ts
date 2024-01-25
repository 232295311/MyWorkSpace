/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function searchInsert(nums: number[], target: number): number {
  //升序数组，二分法。
  //如果在，就返回位置。如果不在，返回插入的位置。

  let left = 0;
  let right = nums.length - 1;
  //左闭右闭
  while (left <= right) {
    console.log(left, right);
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
