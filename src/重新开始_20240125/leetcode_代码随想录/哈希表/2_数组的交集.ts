function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter((item) => {
    return set2.has(item);
  });
  //数组的并集
  [...set1, set2];
  //数组的差集
  [...set1].filter((item) => {
    return !set2.has(item);
  });
}
