function combinationSum3(k: number, n: number): number[][] {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //每个数字 最多使用一次
  const length = 9;
  let res: number[][] = [];
  let currPath: number[] = [];
  let currSum = 0;
  backTracking(0);
  return res;
  function backTracking(startIndex: number) {
    //递归终止条件
    if (currSum > n) {
      //剪枝
      return;
    }
    if (currPath.length === k) {
      currSum === n && res.push([...currPath]);
      return;
    }
    for (let i = startIndex; i < length; i++) {
      if (currPath.length + 1 + (length - i) < k) {
        break; //剪枝
      }
      currPath.push(arr[i]);
      currSum += arr[i];
      backTracking(i + 1);
      currPath.pop();
      currSum -= arr[i];
    }
  }
}
