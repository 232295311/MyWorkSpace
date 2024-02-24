function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => {
    return a - b;
  }); //从小到大排列
  const res: number[][] = [];
  const path: number[] = [];
  let sum = 0;
  function backTracking(start: number) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      //提前剪枝
      if (sum + candidates[i] > target) {
        break;
      }
      path.push(candidates[i]);
      sum += candidates[i];
      backTracking(i); //传i作为start而不是i+1  比如[2,3,6,7] 2的组合用完了 下次循环就只能是3以后的组合不会再出现2
      path.pop(); //回溯
      sum -= candidates[i];
    }
  }
  backTracking(0);
  return res;
}
