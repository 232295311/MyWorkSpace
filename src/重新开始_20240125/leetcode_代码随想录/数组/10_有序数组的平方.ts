function sortedSquares(nums: number[]): number[] {
  //首先理解非递减顺序————即按从小到大排序，但可能包含重复元素
  //先平方再排序，排序算法最快O(nlogn)。
  //双指针O(n) nums = [-7,-3,2,3,11] [4,9,9,49,121]
  const res: number[] = [];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const leftNum = nums[left] * nums[left];
    const rightNum = nums[right] * nums[right];
    if (leftNum >= rightNum) {
      //大的入栈
      res.push(leftNum);
      left++;
    } else {
      res.push(rightNum);
      right--;
    }
  }
  return res.reverse();
}
