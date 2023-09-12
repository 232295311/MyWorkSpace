/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  let quickSort = (arr, left, right, pivot) => {
    //参数pivot传参1,2
    let i = left;
    let j = right;
    while (i < j) {
      while (i < j && arr[j] >= pivot) {
        //找一个比他小的数字
        j--;
      }
      while (i < j && arr[i] < pivot) {
        //找一个比他大的数字
        i++;
      }
      swap(arr, i, j);
    }
    return i;
  };
  const newLeft = quickSort(nums, 0, nums.length - 1, 1);
  quickSort(nums, newLeft + 1, nums.length - 1, 2);
}
