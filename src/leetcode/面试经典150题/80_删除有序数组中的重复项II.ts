function removeDuplicates(nums: number[]): number {
  let k = 2;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    //前两个直接跳过

    if (left < k || nums[left - k] != nums[i]) {
      left++;
    } else {
    }
  }
}
