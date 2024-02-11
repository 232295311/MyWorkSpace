function search(nums: number[], target: number): number {
  //什么时候可以用二分？1.有序数组 2.无重复元素
  //模板写法 nums升序数组，数组中无重复元素,target目标
  let left = 0;
  let right = nums.length - 1; //左闭右闭 [left,right] 所以left === right是有意义的 所以下面循环用<=
  while (left <= right) {
    // const mid = Math.floor((right + left) / 2);
    const mid = left + ((right - left) >> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function search2(nums: number[], target: number): number {
  //模板写法
  let left = 0;
  let right = nums.length;
  //左闭右开 [left,right) 所以left === right是没有意义的（数组长度为0） 所以下面循环用<
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      return mid;
    }
  }
  return -1;
}
