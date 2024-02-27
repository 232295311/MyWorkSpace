function candy(ratings: number[]): number {
  //从左到右遍历第一遍，记录右边孩子评分比左边孩子评分多的情况。如果出现 右边=左边+1
  const arr: number[] = [];
  arr[0] = 1;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    } else {
      arr[i] = 1;
    }
  }
  //这样就完成了第一个全局最优：相邻的孩子中，右边孩子得到的糖一定比左边的多
  //从右往左再遍历一遍，记录左边的孩子评分比右边孩子评分多的情况。如果出现 左边=右边+1
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      arr[i] = Math.max(arr[i], arr[i + 1] + 1);
    }
  }
  return arr.reduce((pre, curr) => pre + curr);
}
