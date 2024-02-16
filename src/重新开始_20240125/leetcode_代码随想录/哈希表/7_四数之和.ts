function fourSum(nums: number[], target: number): number[][] {
  //和三数之和一样，不能有重复的元组，可以有重复的元素
  //同三数之和一样的思路 i j left,right四个指针 将原本n^4复杂度降为n^3
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      //跳过重复的i
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        //跳过重复的j
        continue;
      }
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) {
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
        } else if (sum > target) {
          while (left < right && nums[right - 1] === nums[right]) {
            right--;
          }
          right--;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
        }
      }
    }
  }
  return res;
}
