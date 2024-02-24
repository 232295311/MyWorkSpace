function permuteUnique(nums: number[]): number[][] {
  //nums可包含重复数字 返回所有不重复的全排列 [1,2,2,3]
  const res: number[][] = [];
  const path: number[] = [];

  const used: boolean[] = nums.map(() => {
    return false;
  });

  backTracking();
  return res;

  function backTracking() {
    if (path.length === nums.length) {
      return;
    }
    //每一层for循环都维护一个set
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (used[i] === true || set.has(nums[i])) {
        //去重
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      set.add(nums[i]);
      backTracking();
      path.pop();
      used[i] = false;
    }
  }
}
