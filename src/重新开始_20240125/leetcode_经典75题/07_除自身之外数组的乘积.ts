/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function productExceptSelf(nums: number[]): number[] {
  //题目要求时间复杂度为O(n)
  /**
     *[1,2,3,4,5]
      [1,2,3,4,5]
      [1,2,3,4,5]
      [1,2,3,4,5]
      [1,2,3,4,5]
     */
  /**
    动态规划。沿对角线分为两组组成三角形，我们可以观察到，如果将对角线上的元素去除，
    每行其他所有元素相乘就是我们想要的结果。而每行就等于去除对角线上元素后左边乘以右边。
    而下一行的元素刚好比上一行的元素只多乘了一个数，利用动态规划的思想我们可以得到：
    起始状态:     left[0] = 1
    状态转移方程： left[i] = product(nums[0], .... ,nums[i-1]);
                         = left[i-1] * nums[i-1]
      [1,1,2,6,24]  
    */
  const left = [1];
  const length = nums.length;
  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  // 起始状态：right[length -1] = 1
  // 状态转移方程: right[i] = right[i+1] *  nums[i+1]
  // [ 120, 60, 20, 5, 1 ]
  const right = new Array(length);
  right[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  const res: number[] = [];
  for (let i = 0; i < length; i++) {
    res[i] = left[i] * right[i];
  }
  return res;
}
