function solutions(nums, target) {
  //[1,1,2,2]  4
  let currSum = 0;
  let res = 0;
  let path = [];
  const recur = (startIndex, currSum) => {
    //递归终止条件
    if (currSum === target) {
      console.log(path);
      res++;
      return;
    }
    //剪枝
    if (currSum > target) {
      return;
    }

    //递归进行的操作
    for (let i = startIndex; i < nums.length; i++) {
      currSum += nums[i];
      path.push(nums[i]);
      recur(i + 1, currSum);
      currSum -= nums[i];
      path.pop();
    }
  };
  recur(0, currSum);
  return res;
}

console.log(solutions([1, 1, 2, 2], 4));
// [1, 1, 2]
// [1, 1, 2]
// [2, 2]
