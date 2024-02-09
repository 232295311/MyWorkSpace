function findDifference(nums1: number[], nums2: number[]): number[][] {
  //   const answer: number[][] = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const answer1 = [...set1].filter((item) => !set2.has(item));
  const answer2 = [...set2].filter((item) => !set1.has(item));

  return [answer1, answer2];
}
