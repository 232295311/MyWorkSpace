/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

//需要新建数组的排序
const quickSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  let left = [];
  let right = [];
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1); //将pivot元素取出来，并且在原数组中删除了
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
};

//新写一个不需要新建数组的快速排序,第一次调用时left和right分别为0和arr.length-1
const _quickSort = (arr, left, right) => {
  const swap = (arr, left, right) => {
    //交换函数
    [arr[left], arr[right]] = [arr[right], arr[left]];
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
      //一定要先动j
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
