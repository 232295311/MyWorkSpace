function findMaxAverage(nums: number[], k: number): number {
  //滑动窗口嘞
  let sum = 0;
  let i = 0;
  let j = k - 1;
  for (let p = 0; p < k; p++) {
    sum += nums[p];
  }
  let maxRes = sum / k; //先计算0到k的平均数 然后开始滑动窗口移动
  while (j < nums.length - 1) {
    j++;
    sum += nums[j];
    sum -= nums[i];
    i++;
    maxRes = Math.max(maxRes, sum / k);
  }
  return maxRes;
}
