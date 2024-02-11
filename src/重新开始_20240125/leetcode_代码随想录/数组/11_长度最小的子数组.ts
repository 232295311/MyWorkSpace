function minSubArrayLen(target: number, nums: number[]): number {
  //返回连续子数组的长度。看到连续子数组————一下子想到滑动窗口
  //模板写法
  let left = 0;
  let right = 0; //# 双指针，表示当前遍历的区间[left, right]，闭区间
  let sum = 0; // 用于统计 子数组/子区间 是否有效，根据题目可能会改成求和/计数
  let minRes = nums.length + 1; //保存最大的满足题目要求的 子数组/子串 长度
  while (right < nums.length) {
    sum += nums[right]; //增加当前右边指针的数字/字符的求和/计数
    while (sum >= target) {
      //更新结果原本是放在循环外的，这里题目要求特殊，所以放里面
      minRes = Math.min(minRes, right - left + 1); //需要更新结果
      //不符合题意: # 此时需要一直移动左指针，直至找到一个符合题意的区间
      sum -= nums[left]; //移动左指针前需要从counter中减少left位置字符的求和/计数
      left++; //真正的移动左指针，注意不能跟上面一行代码写反
    }
    // # 到 while 结束时，我们找到了一个符合题意要求的 子数组/子串
    // minRes = Math.min(minRes, right - left + 1); //需要更新结果
    right++; //移动右指针，去探索新的区间
  }

  return minRes === nums.length + 1 ? 0 : minRes;
}
