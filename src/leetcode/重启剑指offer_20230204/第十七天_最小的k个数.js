/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (nums, k) {
  //新写一个不需要新建数组的快速排序,第一次调用时left和right分别为0和arr.length-1
  const _quickSort = (arr, left, right) => {
    const swap = (arr, left, right) => {
      //交换函数
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    };
    //递归终止条件
    if (right - left <= 0) {
      return;
    }
    let i = left;
    let j = right;
    const pivot = arr[left]; //基准数
    while (i < j) {
      while (i < j && arr[j] >= pivot) {
        //直到找到一个比基准数小的数字
        j--;
      }
      while (i < j && arr[i] <= pivot) {
        //直到找到一个比基准数大的数字
        i++;
      }
      swap(arr, i, j); //交换位置
    }
    swap(arr, left, i); //交换基准数和i位置上的数字，这一步的快排到这里结束。
    _quickSort(arr, left, i - 1); //基准数就不用加进去啦 所以i-1
    _quickSort(arr, i + 1, right);
  };
  _quickSort(nums, 0, nums.length - 1);
  return nums.slice(0, k);
};
