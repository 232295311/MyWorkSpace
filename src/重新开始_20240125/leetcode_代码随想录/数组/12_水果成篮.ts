function totalFruit(fruits: number[]): number {
  //题目高亮提示滑动窗口了
  //每棵树只能摘1个水果 模板写法
  let left = 0;
  let right = 0;
  let map = {}; //它的key的名字代表了果篮中的水果种类,它的值代表了在滑动窗口中出现次数
  let mapCounter = 0; //水果种类计数，每次都判断Object.keys(map)的长度有点慢
  let res = -1;
  while (right < fruits.length) {
    const key = fruits[right];
    if (!map[key]) {
      //如果果篮里这种水果为0或者没出现过
      map[key] = 1;
      mapCounter++;
    } else {
      map[key]++;
    }

    while (mapCounter > 2) {
      //如果果篮中的种类超过2种
      //一直往外移出直到里面只有两种种类的水果
      const deleteKey = fruits[left];
      map[deleteKey]--;
      if (map[deleteKey] === 0) {
        //如果数量为0，就从果篮里删除掉这个种类的水果
        mapCounter--;
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
    right++; //代表移动到下一棵树
  }
  return res;
}
