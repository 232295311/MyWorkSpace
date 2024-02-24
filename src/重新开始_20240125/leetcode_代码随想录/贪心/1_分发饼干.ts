function findContentChildren(g: number[], s: number[]): number {
  //要满足尽可能多的孩子，那肯定是给每个孩子都分配大小最接近它胃口的饼干
  let res: number = 0;
  g.sort((a, b) => a - b); //把g和s都进行排序，确保分配时都是极可能地给孩子小的饼干
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (g[i] <= s[i]) {
      //如果胃口小于饼干值，直接分配给他
      i++;
      j++;
      res++;
    } else {
      //如果胃口大于饼干值，找下一块饼干，这块饼干肯定没有用了
      j++;
    }
  }
  return res;
}
