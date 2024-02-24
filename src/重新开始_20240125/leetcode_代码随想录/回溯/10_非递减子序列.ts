function findSubsequences(nums: number[]): number[][] {
  //就是返回可以有重复元素的递增子序列
  const res: number[][] = [];
  const path: number[] = [];
  backTracking(0);
  return res;
  function backTracking(start: number) {
    if (path.length >= 2) {
      res.push([...path]); //至少有两个元素时，收集每个节点
    }
    //还是需要start 组合问题避免重复
    //每层维护一个set
    const set = new Set();
    for (let i = start; i < nums.length; i++) {
      if ((path.length > 0 && path.at(-1)! > nums[i]) || set.has(nums[i])) {
        //如果path顶元素大于纵向遍历到的元素 或者该元素在这层被使用过
        continue;
      }
      path.push(nums[i]);
      set.add(nums[i]);
      backTracking(i + 1);
      path.pop();
    }
  }
}
