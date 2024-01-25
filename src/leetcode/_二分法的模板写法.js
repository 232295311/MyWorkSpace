/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/*
吃透二分法
https://leetcode.cn/problems/search-in-rotated-sorted-array/solutions/552298/yi-wen-dai-ni-shua-bian-er-fen-cha-zhao-dtadq/?envType=study-plan-v2&envId=top-interview-150
 */

//二分法使用的两种情况
// （版本一）左闭右闭区间 [left, right]

var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  // 区间 [l, r]
  while (l <= r) {
    //这里需要加等号，保证l等于r的情况下[l，r]是有意义的
    let mid = (l + r) >> 1; //应该用>>符号来除以2，否则的话需要用Math.floor
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      //目标值大于中间值，目标值在右区间
      l = mid + 1; //移动左指针，锁定右区间
    } else {
      //目标值大小于中间值，目标值在左区间
      r = mid - 1; //移动右指针，锁定左区间
    }
  }
  return -1;
};

// （版本二）左闭右开区间 [left, right)

var search = function (nums, target) {
  let l = 0,
    r = nums.length;
  // 区间 [l, r）
  while (l < r) {
    let mid = (l + r) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid; // 左闭右开区间模式 mid会被取到
    }
  }
  return -1;
};
