function hIndex(citations: number[]): number {
  //   //先按从大到小排列
  //   citations.sort((a, b) => b - a);
  //   //然后遍历，如果当前元素比h大，那就说明我们找到了一篇至少被引用了h+1次的论文，h就可以+1
  //   let h = 0;
  //   for (let i = 0; i < citations.length; i++) {
  //     if (h < citations[i]) {
  //       h++;
  //     }
  //   }
  //   return h;

  //计数排序 只需要遍历两次
  //我们知道h指数是不可能超过数组长度的，所以先创建一个空的计数数组
  //count[i]代表被引用i次的论文有几篇
  const length = citations.length;
  let count = new Array(length + 1).fill(0);
  for (let i = 0; i < length; i++) {
    if (citations[i] >= length) {
      //如果这篇论文被引用数 大于等于 数组长度
      count[length]++;
    } else {
      //反之 就给count中对应的位置加上数量
      count[citations[i]]++;
    }
  }
  // console.log(count);
  //然后从尾到头遍历count数组，计算h，此时i代表被引用次数了
  let h = 0;
  for (let i = length; i >= 0; i--) {
    if (i > h) {
      //说明至少有count[i]篇是至少被引用h+1次的
      h = h + count[i];
      if (h > i) {
        //h不能超过i
        return i;
      }
    }
  }
  return h;
}
