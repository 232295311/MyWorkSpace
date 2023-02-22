/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  //这道题最优质的写法应该是最小堆，但是js没有堆，懒得自己手撸，所以就用数组和二分搜索代替。
  this.list = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  //添加的时候，用二分查找法找到位置插入，消耗 n * logn
  let left = 0;
  let right = this.list.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (num > this.list[mid]) {
      left = mid + 1;
    } else if (num < this.list[mid]) {
      right = mid - 1;
    } else if (num === this.list[mid]) {
      //如果能找到相等的
      this.list.splice(mid, 0, num); //将num插入到mid这个位置
      return;
    }
  }
  //如果找不到相等的位置 此时left>right
  this.list.splice(right, 0, num); //将num插入到right这个位置
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const length = this.list.length;
  return (
    (this.list[Math.floor(length / 2)] +
      this.list[Math.floor((length - 1) / 2)]) /
    2
  );
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
