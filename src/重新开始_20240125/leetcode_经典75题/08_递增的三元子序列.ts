/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) {
    return false;
  }
  //三指针直接模拟 O(n^3) 题目要求时间复杂度为O(n)

  /**
   * 先是普通的双向遍历算法，遍历三次数组
   * 数组 left[i] = nums从[0,i]中最小的数
   * 数组 right[i] = nums从[i,nums.length-1]区间中最大的数
   *
   **/
  /**
     * const n = nums.length;
    const left = new Array(n);
    left[0] = nums[0];
    const right = new Array(n);
    right[n - 1] = nums[n - 1];
    for (let i = 1; i < n; i++) {
      left[i] = Math.min(left[i - 1], nums[i]);
    }
    for (let j = n - 2; j >= 0; j--) {
      right[j] = Math.max(right[j + 1], nums[j]);
    }
    console.log(left, right);
    for (let i = 1; i < n; i++) {
      if (left[i - 1] < nums[i] && nums[i] < right[i + 1]) {
        return true;
      }
    }
    return false;
     */
  /**
   *    [20,100,10,12,5,13]
   贪心算法(向上子序列)可以优化掉数组left和数组right。
   引入变量first和second分别表示递增子序列的第一个和第二个数字
   初始态：first = nums[0], second = Number.MaxValue
   使得永远满足：first <second，
   引入third即我们遍历时的nums[i]：
   ①如果 (old)first < second < third  ====>返回true
   ②如果 first < third < second  ====>那么要更新second为third，然后继续找third  
   ③如果 third < first  ====> 那么要first成为third，但是second不用变，
    因为old first依然存在，说不定下一个third就能满足third>second了呢，
   这时second代表“在我之前扔有一个数字比我小”
   */
  let first = nums[0];
  let second = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    const third = nums[i];
    if (second < third) {
      return true;
    } else if (first < third && third < second) {
      second = third;
    } else if (third < first) {
      first = third;
    }
  }
  return false;
}
