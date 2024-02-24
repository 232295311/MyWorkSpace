function combinationSum2(candidates: number[], target: number): number[][] {
  // 排列问题，讲究顺序（即 [2, 2, 3] 与 [2, 3, 2] 视为不同列表时） 不是排列问题
  // 组合问题，不讲究顺序（即 [2, 2, 3] 与 [2, 3, 2] 视为相同列表时），
  // 需要按照某种顺序搜索，此时使用 begin 变量。
  candidates.sort((a, b) => a - b); // [1, 1, 2, 5, 6, 7, 10]
  const res: number[][] = [];
  const path: number[] = [];
  let sum = 0;
  backTracking(0);
  return res;
  function backTracking(start: number) {
    //递归终止条件
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      //提前剪枝
      if (sum + candidates[i] > target) {
        break;
      }
      //如果这轮循环(同层的叫循环，竖层的叫递归)遇到重复的数字也剪枝
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue; //跳过 比如[1,1,2] [1,1]已经在第一轮递归用掉了，第二轮循环时start=0,i=1遇到1就不能继续进行了
      }
      path.push(candidates[i]);
      sum += candidates[i];
      backTracking(i + 1); //数字不是可以重复使用的，传i+1
      path.pop();
      sum -= candidates[i];
    }
  }
}
