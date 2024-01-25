function combine(n: number, k: number): number[][] {
  //简单的回溯 返回1到n中，所有k个数的集合。且1 <= k <= n

  let arr = new Array(n); // 4;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  } //[1,2,3,4]
  const res: number[][] = [];

  recur(0, []);
  return res;
  function recur(index: number, group: number[]) {
    //递归终止条件
    if (group.length === k) {
      res.push([...group]);
      return;
    }
    for (let i = index; i < arr.length; i++) {
      group.push(arr[i]);
      recur(i + 1, group);
      group.pop(); //回溯
    }
  }
}
