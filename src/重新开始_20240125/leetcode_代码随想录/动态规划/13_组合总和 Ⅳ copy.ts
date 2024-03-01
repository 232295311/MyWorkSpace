function combinationSum4(nums: number[], target: number): number {
  //其实求的是排列 可以用回溯，但是会超时
  nums.sort((a, b) => a - b);
  const res: any[] = [];
  const path: any[] = [];
  let currSum = 0;
  // const used: boolean[] = nums.map(() => {
  // return false;
  // });
  //排列问题如果每个元素只能用一次，用used。因为也不是组合问题，每次都从0开始，所以也不需要startIndex
  backTracking();
  function backTracking() {
    if (currSum > target) {
      return;
    }
    if (currSum === target) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (currSum + nums[i] > target) {
        return;
      }
      path.push(nums[i]);
      currSum += nums[i];
      backTracking();
      path.pop();
      currSum -= nums[i];
    }
  }
  return res.length;
}
