function search(nums: number[], target: number): number {
  // nums 中的所有整数 互不相同
  // nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;

    if (nums[mid] === target) {
      return mid;
    }

    //首先mid分两种情况（target已经!==nums[mid]了）
    //1.如果nums[left] < nums[mid] 那么left到mid肯定是递增的，
    //  此时target有两种情况：
    //      ①.nums[left] <= target < nums[mid]，那么right = mid - 1
    //      ②.target不在[left,mid)之间，那么left = mid+1
    //2.如果nums[left] > nums[mid] 那么left到mid中间有旋转点，且mid到right肯定是递增的
    //  此时target也有两种情况：
    //      ①. nums[mid] < target <= nums[mid]，那么left = mid + 1
    //      ②. target不在(mid,right]，那么right = mid -1
    if (nums[left] <= nums[mid]) {
      //=等于号覆盖left==mid==right的情况，如果这都找不到，就弹出了
      if (nums[left] <= target && target < nums[mid]) {
        //target在[left,mid)里面
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] > nums[mid]) {
      //上面可以用else 这里就不作简写了
      if (nums[mid] < target && target <= nums[right]) {
        //target在(mid,right]里
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

//[5,6,7,0,1,2,4]
