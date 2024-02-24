function canCompleteCircuit(gas: number[], cost: number[]): number {
  //[ 2   3   4   ]    [1,2,3,4,5 ]
  //[   3   4   3 ]    [ 3,4,5,1,2]
  // ①：如果总gas小于总cost，那肯定跑不了一圈，反之则一定能跑一圈
  // 证明： 如果遍历到nums[i]时，净油量累加为负数，说明从[0,i]这里任选一个加油站当做起点，到i这里都会断油，都不适合当起点。
  //     局部最优：当前累加到i的净油量一旦小于0，起始位置至少要是i+1，因为从i之前开始一定不行。
  //              每次小于0之后，都重置净油量累计量为0。
  //              再继续遍历，如果在位置j还出现小于0的情况，说明从i到j也不行，起始位置至少是j+1
  //     全局最优：找到可以跑一圈的起始位置。

  let currSum = 0;
  let totalSum = 0;
  let startIndex = 0;
  for (let i = 0; i < cost.length; i++) {
    totalSum += gas[i] - cost[i];
    currSum += gas[i] - cost[i];
    if (currSum < 0) {
      //说明i之前不行
      startIndex = i + 1;
      currSum = 0; //置0重新计算
    }
    //如果currSum一直都大于0，说明每个加油站都净赚，从哪里开始都可以startIndex不变。
  }
  if (totalSum < 0) {
    return -1;
  }
  return startIndex;
}
