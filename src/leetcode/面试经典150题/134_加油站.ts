function canCompleteCircuit(gas: number[], cost: number[]): number {
  //[ 2   3   4   ]
  //[   3   4   3 ]
  // ①：如果总gas小于总cost，那肯定跑不了一圈，反之则一定能跑一圈
  // ②：如果满足①，计算经过每个加油站后，累计此时汽车的净油量，得到一个最低点，如果最低点>=0,那肯定每个加油站都能加油，肯定能跑完
  // ③：②的结果中，一定存在一个或多个最低点，那么这个额最低点的下一站就是开始的加油站。
  // 因为车子油量最少时，就是最低点，那这个最低点的下一站一定是【获取>支出】的，并且从这一站开始纵观全程，是在不断抹平最低点带来的影响的

  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let index = 0;
  for (let i = 0; i < gas.length; i++) {
    sum = sum + gas[i] - cost[i];
    if (sum < min) {
      min = sum;
      index = i + 1;
    }
  }
  if (sum < 0) {
    return -1;
  }
  if (min >= 0) {
    return 0;
  }
  return index === gas.length ? 0 : index;
}
