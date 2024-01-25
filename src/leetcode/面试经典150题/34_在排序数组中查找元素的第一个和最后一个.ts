/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function searchRange(nums: number[], target: number): number[] {
  //升序数组 二分法
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      //一样 这里不做简写
      right = mid - 1;
    }
  }

  const resLeft = nums[left] === target ? left : -1;

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      //一样 这里不做简写
      left = mid + 1;
    }
  }
  const resRight = nums[right] === target ? right : -1;
  return [resLeft, resRight];
}
