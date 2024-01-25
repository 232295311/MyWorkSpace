/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

// interface LRUCache {
//   length: number;
// }
//一开始想用的是队列，但是队列里将一个元素提到队列尾有点麻烦，考虑使用链表
//但是使用链表，在get的时候查找元素又很麻烦，考虑使用hash+链表
//又有问题来了，如果使用单向链表，又难以找到想要删除的节点的上一个节点，所以考虑用hash+双向链表
class LRUCache {
  capacity: number;
  map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map<number, number>();
    //keep-alive组件也是用map实现的，在js中map可以代替很好地代替hash+链表
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value!);
      return value!;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      //如果已经存在，那就先删除再赋值到最末尾的位置
      this.map.delete(key);
    }
    this.map.set(key, value);

    if (this.capacity < this.map.size) {
      //淘汰掉最旧的那个
      this.map.delete([...this.map.keys()][0]);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
