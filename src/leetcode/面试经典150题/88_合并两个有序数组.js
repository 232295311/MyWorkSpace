/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  //非递减顺序 = 递增但是可以有重复
  //那么简单点的话可以用双指针从头开始
  //这里采用三尾指针从尾部开始插入的方法，可以节省空间
  let p1 = m - 1;
  let p2 = m + n - 1;
  let p3 = n - 1;

  while (p2 >= 0) {
    if (p3 < 0 || nums1[p1] >= nums2[p3]) {
      nums1[p2] = nums1[p1];
      p2--;
      p1--;
    } else if (p1 < 0 || nums1[p1] < nums2[p3]) {
      nums1[p2] = nums2[p3];
      p2--;
      p3--;
    }
  }
}

merge([1, 2, 3, 4, 0, 0, 0], 4, [2, 5, 6], 3);
