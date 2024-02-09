/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function equalPairs(grid: number[][]): number {
  //不仅顺序要相同，元素也要相同
  function arrayEqual(arr1: number[], arr2: number[]): boolean {
    return arr1.every((item, index) => {
      return item === arr2[index];
    });
  }
  const n = grid.length;
  const grid2: number[][] = [];
  for (let j = 0; j < n; j++) {
    const tempArr: number[] = [];
    for (let i = 0; i < n; i++) {
      tempArr.push(grid[i][j]);
    }
    grid2.push(tempArr);
  }
  let resCounter = 0;
  //   console.log(grid2);
  grid.forEach((item1) => {
    grid2.forEach((item2) => {
      if (arrayEqual(item1, item2)) {
        resCounter++;
      }
    });
  });
  return resCounter;
}
