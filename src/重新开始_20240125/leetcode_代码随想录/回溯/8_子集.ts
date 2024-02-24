function subsets(nums: number[]): number[][] {
  //找所有节点而不是叶节点
  const res: number[][] = [];
  res.push([]); //空子集是任何集合的子集
  const path: number[] = [];
  backTracking(0);
  return res;
  function backTracking(start) {
    if (start >= nums.length) {
      return;
    }
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      res.push([...path]); //每个节点都要进入
      backTracking(i + 1);
      path.pop();
    }
  }
}
