function maxSlidingWindow(nums: number[], k: number): number[] {
  //单调队列 队列的头永远是最大的，队列中保持单调递减
  const queue: number[] = []; //需要保存下标，如果保存数字，没办法队头啥时候移除滑动窗口外
  const res: number[] = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (queue.length === 0) {
      queue.push(i); //存下标
    } else {
      if (queue[0] <= i - k) {
        //判断队列头是否位于滑动窗口左边了
        queue.shift();
      }
      while (nums[queue.at(-1)!] <= nums[i]) {
        //   比nums[i]小的队列尾全部移除
        queue.pop();
      }
      queue.push(i);
    }

    if (count < k - 1) {
      count++;
    } else {
      res.push(nums[queue[0]]); //只要count到数了，每次遍历i都将保存单调队列的队头至结果中
    }
  }
  return res;
}
