function findKthLargest(nums: number[], k: number): number {
  //找到第k大的元素 一般来说是排序后返回，但是它要求O(N)；
  //只遍历一次 利用快速排序的方法，
  //当基数的位置恰好是n-k时，即可返回。如果基数位置小于n-k，则只需要排右半部分就可以了，如果基数位置大于n-k，则只需要排序左半部分就可以了
  //这样的时间复杂度是O(2n-1)

  const length = nums.length;

  //交换函数
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  const quickSort = (arr, i, j) => {
    let left = i;
    let right = j;
    const pivot = arr[i];
    while (left < right) {
      //找到第一个比pivot小的数字
      while (left < right && arr[right] >= pivot) {
        right--;
      }
      //找到比pivot大的数字
      while (left < right && arr[left] <= pivot) {
        left++;
      }
      swap(arr, left, right);
    }
    swap(arr, i, left); //结束后，把pivot换到left的位置去
    if (left < length - k) {
      quickSort(arr, left + 1, j);
    } else if (left > length - k) {
      quickSort(arr, i, left - 1);
    }
    //如果都不是，则直接返回length-k位置上的数字
    return arr[length - k];
  };

  return quickSort(nums, 0, length - 1);
}
