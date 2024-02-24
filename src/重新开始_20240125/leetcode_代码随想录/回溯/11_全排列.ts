function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const used: boolean[] = nums.map(() => {
    return false;
  });
  backTracking();
  return res;

  function backTracking() {
    //排列问题用used
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      //每次i都从0开始
      if (used[i] === true) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backTracking();
      path.pop();
      used[i] = false;
    }
  }
}
