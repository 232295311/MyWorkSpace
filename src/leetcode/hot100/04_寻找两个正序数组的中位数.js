/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

/** 取中位数其实相当于取第k小的数，根据数组的长度我们可以判断出k的值。
 *  如果数组和是奇数，就取1个k。如果数组和是偶数，就取两个第k小的数
 *  然后我们在两个数组上，分别取 k/2 -1 下标的数字，然后比较大小，然后就可以排除小的那一部分之前的数组
 * /

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  //
  const binarySearch = (nums1, nums2, offset1, offset2, currentK) => {
    // console.log(nums1, nums2, offset1, offset2, currentK)
    const len1 = nums1.length;
    const len2 = nums2.length;
    /* 特例 */
    if (len1 === offset1) return nums2[offset2 + currentK - 1]; // nums1 数组元素都排除完了
    if (len2 === offset2) return nums1[offset1 + currentK - 1]; // nums2 数组元素都排除完了
    // 排除到只剩两个元素取最小 即剩余元素的最小值
    if (currentK === 1) {
      return Math.min(nums1[offset1], nums2[offset2]);
    }

    /* 通常情况 */
    // 取currentK的一半 同时注意可能会超出数组长度 最多取数组最后一个元素
    const mid1 = offset1 + Math.min(len1, Math.floor(currentK / 2)) - 1;
    const mid2 = offset2 + Math.min(len2, Math.floor(currentK / 2)) - 1;

    if (nums1[mid1] <= nums2[mid2]) {
      return binarySearch(
        nums1,
        nums2,
        mid1 + 1,
        offset2,
        currentK - (mid1 + 1 - offset1)
      );
    } else {
      return binarySearch(
        nums1,
        nums2,
        offset1,
        mid2 + 1,
        currentK - (mid2 + 1 - offset2)
      );
    }
  };

  const length1 = nums1.length;
  const length2 = nums2.length;
  const k = Math.floor((length1 + length2) / 2) + 1; //取第k小的数

  const isOdd = (length1 + length2) % 2 === 1 ? true : false;
  const left = binarySearch(nums1, nums2, 0, 0, k);
  // 判断总长度奇偶
  if (isOdd) {
    return left;
  } else {
    const right = binarySearch(nums1, nums2, 0, 0, k - 1);
    return (left + right) / 2;
  }
};
