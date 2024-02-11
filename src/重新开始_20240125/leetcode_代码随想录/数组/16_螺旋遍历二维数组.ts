function spiralArray(array: number[][]): number[] {
  if (array.length === 0 || array[0].length === 0) {
    return [];
  }
  //方向数组
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let currDirectionIndex = 0;
  const m = array.length;
  const n = array[0].length;
  //记录已遍历元素的数组
  const visited: boolean[][] = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false);
  }
  console.log(visited);
  let counter = 0;
  let i = 0;
  let j = 0;
  const res: number[] = [];
  while (counter < m * n) {
    res.push(array[i][j]);
    visited[i][j] = true;
    counter++;
    const nextRow = i + direction[currDirectionIndex][0];
    const nextColumn = j + direction[currDirectionIndex][1];
    if (
      nextRow < 0 ||
      nextRow >= m ||
      nextColumn < 0 ||
      nextColumn >= n ||
      visited[nextRow][nextColumn] === true
    ) {
      currDirectionIndex = (currDirectionIndex + 1) % 4;
    }
    i = i + direction[currDirectionIndex][0];
    j = j + direction[currDirectionIndex][1];
  }
  return res;
}
