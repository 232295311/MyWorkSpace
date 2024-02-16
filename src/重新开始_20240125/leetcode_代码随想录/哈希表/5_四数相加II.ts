function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  //四数之和可以看成两个两数之和  hashmap中 key存数字 value存出现次数
  const n = nums1.length;
  const hashmap = {};
  let res = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = nums1[i] + nums2[j];
      if (!hashmap[sum]) {
        hashmap[sum] = 1;
      } else {
        hashmap[sum]++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //这边就把后两个数组所有两数相加的组合遍历一边，需要n^2
      //剩下的操作就类似于 两数之和 了
      const num = nums3[i] + nums4[j];
      const target = 0;
      if (hashmap[target - num] !== undefined) {
        //如果能找到,说明存在这种组合排列形式
        res += hashmap[target - num];
      }
    }
  }
  return res;
}
