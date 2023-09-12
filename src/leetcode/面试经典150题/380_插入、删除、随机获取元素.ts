/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

interface RandomizedSet {
  map: Map<number, number>;
  nums: Array<number>;
}

class RandomizedSet {
  constructor() {
    this.map = new Map(); //哈希表，入参val是下标，值
    this.nums = new Array();
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }
    this.map.set(val, this.nums.length); //[5,0],[10,1],[32,2],[50,4]
    this.nums.push(val); //[5,10,32,50]
    return true;
  }

  remove(val: number): boolean {
    if (this.map.has(val)) {
      const removeIndex: number = this.map.get(val) as number; //要被删除的下标
      //将这个元素与数组最后一个元素交换
      const swapVal = this.nums.at(-1) as number;

      this.nums.pop();
      this.map.delete(val);

      if (swapVal != val) {
        this.nums[removeIndex] = swapVal;
        this.map.set(swapVal, removeIndex);
      }
      return true;
    }
    return false;
  }

  getRandom(): number {
    let length = this.nums.length;
    const randomIndex = Math.floor(Math.random() * length);
    return this.nums[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
