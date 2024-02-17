function removeElement(nums: number[], val: number): number {
  //必须原地移除元素，返回剩下元素的长度 [0,1,2,2,3,0,4,2], val = 2
  //双指针法————内在含义是把需要N^2的遍历变成N
  // 快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
  // 慢指针：指向更新 新数组下标的位置
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    //顺序不能乱，所以不能用一前一后指针进行换位的方式。
    if (nums[fast] === val) {
      //fast遇到val就跳
      fast++;
    } else {
      nums[slow] = nums[fast];
      slow++;
      fast++;
    }
  }
  return slow;
}
