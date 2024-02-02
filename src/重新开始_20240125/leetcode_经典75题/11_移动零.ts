/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  //双指针 但是顺序不能乱
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    //完成左边非0数组
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  //补全右边全0数组
  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }
}
