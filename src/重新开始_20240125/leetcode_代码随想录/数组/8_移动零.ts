/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  //双指针 将所有 0 移动到数组的末尾 但是顺序不能乱
  let slow = 0; //指向要被替换的元素 这道题里是0
  let fast = 0; //指向要替换的元素 这道题里是非0数字
  while (fast < nums.length) {
    if (nums[fast] === 0) {
      fast++; //fast增加 slow不变
    } else {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]; //交换
      slow++;
      fast++;
    }
  }
}
