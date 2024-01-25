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
function findMin(nums: number[]): number {
  // nums 中的所有整数 互不相同
  // nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转
  // 二分法，每次先判断最左和最右，
  // 如果left到mid是递增，那说明最小的值肯定在右边，那么缩小左边界
  // 如果left到mid不是递增，那说明left到mid中间有旋转数组的分界点，那么缩小右边界
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //这一步不能写在外面，因为当每一次区间发生变化时，都得判断是否递增
    if (nums[left] < nums[right]) {
      //如果是单调递增的
      return nums[left];
    }

    const mid = (left + right) >> 1;
    if (nums[mid] > nums[left]) {
      //left到mid是递增的，且Left不是最小的，那说明最小的值肯定在右边
      left = mid + 1;
    } else if (nums[mid] < nums[left]) {
      //left到mid不是递增的，说明中间有旋转数组的分界点，且mid可能就是最小值，所以right不能是mid-1
      right = mid;
    }
  }
}

/**
 * 
 
function findMin(nums: number[]): number {
    //nums 中的所有整数 互不相同
    // nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      //这一步不能写在外面，因为当每一次区间发生变化时，都得判断是否递增
      if (nums[left] < nums[right]) {
        //如果是单调递增的
        return nums[left];
      }
  
      const mid = (left + right) >> 1;
      if (nums[mid] >= nums[left]) {
        //left到mid是递增的，且Left不是最小的，那说明最小的值肯定在右边
        left = mid + 1;
      } else if (nums[mid] < nums[left]) {
        //left到mid不是递增的，说明中间有旋转数组的分界点，且mid可能就是最小值，所以right不能是mid-1
        right = mid;
      }
    }
    return nums[right]
  }
  
 * 
 */
