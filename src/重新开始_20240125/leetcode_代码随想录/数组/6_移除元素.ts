function removeElement(nums: number[], val: number): number {
  //必须原地移除元素，返回剩下元素的长度 [0,1,2,2,3,0,4,2], val = 2
  //双指针法————内在含义是把需要N^2的遍历变成N
  let slow = 0;
  let fast = 0;
  // 快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
  // 慢指针：指向更新 新数组下标的位置
  // 数组的删除工作就是将需要删除元素后面位置的所有元素都前移一格
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      //相当于fast遇到val就跳过 slow一直稳步前进 这样所有非val的元素都将被slow按顺序排列在数组里
      nums[slow] = nums[fast];
      slow++;
      fast++;
    } else {
      fast++;
    }
  }
  return slow;
}
