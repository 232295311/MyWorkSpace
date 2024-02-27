function reconstructQueue(people: number[][]): number[][] {
  //同之前做的题————分发糖果一样，有两个维度的规则
  //    遇到两个维度权衡的时候，一定要先确定一个维度，再确定另一个维度。
  //    如果两个维度一起考虑一定会顾此失彼。
  //那么这道题，我们的两个维度就是——1.按身高h排序 2.按优先级k排序
  //①按k排序，肯定是按k从小到大，排完后我们尝试按身高重组排序，发现很多成员都无法确定插入的位置，
  //比如题目例1中我们按k排序完是: [5,0] [7,0] [6,1] [7,1] [5,2] [4,4]，
  //   当重新确定[7,1]位置时我们发现它有两个位置可以插入，比如在[7,0]后面或者在[6,1]后面，
  //
  //②那我们按身高排，肯定是按h从大到小排序，排完后：[7,0] [7,1] [6,1] [5,0] [5,2] [4,4]
  //   再尝试重组： [7,0] [7,1]
  //   [6,1]只能放：[7,0] [6,1] [7,1]
  //   [5,0]只能放：[5,0] [7,0] [6,1] [7,1]
  //   [5,2]只能放：[5,0] [7,0] [5,2] [6,1] [7,1]
  //   [4,4]只能放：[5,0] [7,0] [5,2] [6,1] [4,4] [7,1]
  //   放下的位置都等于k的位置

  people.sort((a, b) => {
    if (b[0] == a[0]) {
      return a[1] - b[1]; //身高一样，按k小的在前面
    }
    return b[0] - a[0];
  }); //按身高降序排列
  //   console.log(people);
  let res: number[][] = [];
  for (let i = 0; i < people.length; i++) {
    const h = people[i][0];
    const k = people[i][1];
    res.splice(k, 0, [h, k]); //在第k位插入[h,k]
  }
  return res;
}
