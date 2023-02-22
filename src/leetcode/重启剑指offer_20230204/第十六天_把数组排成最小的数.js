/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  //因为最后排出来的数，位数是一定的，所以要排出最小的一个数，规则应该如下：
  // 1. 0可以放在最前面。nums中不会出现类似01这样的数字
  // 2. 数字第一位越小的数字越靠前，如果第一位相同，则比较第二位。
  // 由此可得，如果x和y都是字符串，拼接字符串满足：x+y < y+x ，则x应该放到y前面，表示顺序。
  const compare = (x, y) => {
    //定义一个比较函数 如果x+y < y+x，返回true。
    return Number(`${x}${y}`) < Number(`${y}${x}`);
  };

  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let left = [];
    let right = [];
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0]; //将pivot元素取出来，并且在原数组中删除了
    for (let i = 0; i < arr.length; i++) {
      if (compare(arr[i], pivot)) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot).concat(quickSort(right));
  };

  const sortedArr = quickSort(nums);
  return sortedArr.join("");
};
