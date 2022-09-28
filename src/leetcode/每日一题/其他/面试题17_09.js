/*
 * @Description: 22-09-28每日一题，同《264. 丑数 II》一样。
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * @param {number} k
 * @return {number}
 */
//  var getKthMagicNumber = function (k) {
//   //优先队列/最小堆法，每次将队列中头部的数字弹出，然后将该数字的3、5、7倍数重新加入队列中。注意去重。
//   //用一个对象来保存哈希关系
//   let queue = [1];
//   const map = {};
//   let count = 0; //计数
//   while (count < k - 1) {
//     const value = queue.shift();
//     const threeValue = value * 3;
//     const fiveValue = value * 5;
//     const sevenValue = value * 7;
//     if (map[threeValue] === undefined) {
//       queue.push(threeValue);
//       map[threeValue] = 1;
//     }
//     if (map[fiveValue] === undefined) {
//       queue.push(fiveValue);
//       map[fiveValue] = 1;
//     }
//     if (map[sevenValue] === undefined) {
//       queue.push(sevenValue);
//       map[sevenValue] = 1;
//     }
//     count++;
//     queue = queue.sort((a, b) => a - b);
//   }
//   return queue.shift();
// };

//动态规划 将大问题的最优解转为求各个小问题的最优解。其实就是求已知数中，3x,5x,7x的最小值是哪一个
var getKthMagicNumber = function (k) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let arr = [1];

  for (let i = 0; i < k - 1; i++) {
    const minValue = Math.min(Math.min(arr[p1] * 3, arr[p2] * 5), arr[p3] * 7);
    minValue === arr[p1] * 3 && p1++;
    minValue === arr[p2] * 5 && p2++;
    minValue === arr[p3] * 7 && p3++;
    arr.push(minValue);
  }
  return arr.pop();
};
