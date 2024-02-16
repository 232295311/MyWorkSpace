function twoSum(nums: number[], target: number): number[] {
  // 首先我再强调一下 什么时候使用哈希法，
  // 当我们需要查询一个元素是否出现过，或者一个元素是否在集合里的时候，就要第一时间想到哈希法。
  /**
   * 为什么会想到用哈希表 
     哈希表为什么用map，而不是数组,Set？ 因为要存key和下标 数组和set的key是被限定了的
     本题map是用来存什么的？map用来存遍历过的元素
     map中的key和value用来存什么的？map中的存储结构为 {key：数据元素，value：数组元素对应的下标}。
   */
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[target - num] === undefined) {
      map[num] = i;
    } else {
      return [map[target - num], i];
    }
  }
}
