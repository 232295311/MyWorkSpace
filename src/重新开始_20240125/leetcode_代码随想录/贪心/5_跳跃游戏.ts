function canJump(nums: number[]): boolean {
  //维护一个maxDepth，代表目前能达到的最深的深度
  // maxDepth
  let maxDepth = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxDepth < i) {
      return false; //如果maxDepth连i都遍历不到，且这时候i也没到达nums右边界，说明无法完成题目要求跳跃
    }
    maxDepth = Math.max(maxDepth, i + nums[i]);
  }
  return true;
}
