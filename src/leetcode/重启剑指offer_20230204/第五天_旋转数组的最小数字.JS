/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  //二分查找，和数组最右边的数字对比
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[right] < numbers[mid]) {
      //numbers[right]小 说明更小的还在右边
      left = mid + 1;
    } else if (numbers[right] > numbers[mid]) {
      //numbers[right]大 说明更小的还在左边或者就是mid本身
      right = mid;
    } else {
      right--;
    }
  }
  return numbers[left];
};
