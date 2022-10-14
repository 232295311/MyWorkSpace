/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  //二分查找
  let len = numbers.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] < numbers[right]) {
      right = mid;
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else if (numbers[mid] === numbers[right]) {
      right--;
    }
  }
  return numbers[right];
};
