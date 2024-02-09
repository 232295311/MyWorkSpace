/*
 * @Author: 232295311@qq.com 232295311@qq.com
 * @Date: 2024-02-09 12:10:58
 * @LastEditors: 232295311@qq.com 232295311@qq.com
 * @LastEditTime: 2024-02-09 13:50:40
 * @FilePath: \MyWorkSpace\src\重新开始_20240125\leetcode_经典75题\27_最近的请求次数.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface RecentCounter {
  queue: number[];
  head: number;
  headIndex: number;
}
class RecentCounter {
  constructor() {
    this.queue = [];
    // this.head = -3000;
    this.headIndex = 0;
  }

  ping(t: number): number {
    this.queue.push(t);
    //每次都需要返回位于[t-3000,t]之间的元素个数
    console.log(this.queue[this.headIndex], this.head);
    while (this.queue[this.headIndex] < t - 3000) {
      //1<2999? 1<2900? 1<1?
      this.headIndex++;
    }
    return this.queue.length - this.headIndex;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
