function subsetsWithDup(nums: number[]): number[][] {
  //子集问题中多加了一个要素——nums中会有重复元素，但还是只能使用一次
  const res: number[][] = [];
  res.push([]); //空子集是任何集合的子集
  const path: number[] = [];
  nums.sort((a, b) => a - b); //排序，用于去除重复组合
  backTracking(0);
  return res;

  function backTracking(start) {
    if (start >= nums.length) {
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue; //跳过重复的组合 如[1,2,2,3,4]里的第2个2
      }
      path.push(nums[i]);
      res.push([...path]); //每个节点都要进入
      backTracking(i + 1);
      path.pop();
    }
  }
}
