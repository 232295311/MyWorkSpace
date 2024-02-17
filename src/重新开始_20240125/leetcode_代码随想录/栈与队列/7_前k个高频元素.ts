function topKFrequent(nums: number[], k: number): number[] {
  //js没有堆，懒得自己写，用map实现，用堆的话主要能省下排序的时间复杂度

  //往map里面加元素，加完根据频次排序数组，然后返回前k个就行了
  let map = new Map<number, number>();
  let max = 0; //用于后面桶排序创建数组
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
      max = 1;
    } else {
      const newValue = map.get(nums[i])! + 1;
      max = Math.max(max, newValue);
      map.set(nums[i], newValue);
    }
  }
  //统计完出现频率了，接下来：
  //   新建一个数组，下标index代表频率，值value代表这个频率对应的数字数组
  const arr: number[][] = new Array(max + 1);
  for (let [key, value] of map) {
    //value就是出现频率,key就是数字。出现频率高的就到数组后面去了
    if (arr[value] == null) {
      arr[value] = [key];
    } else {
      arr[value].push(key);
    }
  }
  const res: number[] = [];
  console.log(arr);
  //倒序遍历arr
  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i] !== undefined) {
      //空值在遍历中当Undefined处理
      res.push(...arr[i]); //题目数据保证答案唯一才可以这么填入 不然还得根据k的大小，填入后删掉移除的
    }
  }
  return res;
}
