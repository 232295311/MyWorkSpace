/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const getSum = (m, n) => {
    //m为横坐标，n为纵坐标 该函数为计算m和n的数位和 返回该数位和
    let _m = String(m)
      .split("")
      .reduce((pre, curr) => {
        return Number(pre) + Number(curr);
      });
    let _n = String(n)
      .split("")
      .reduce((pre, curr) => {
        return Number(pre) + Number(curr);
      });
    return Number(_m) + Number(_n);
  };
  //先写一份BFS的
  //用队列和迭代来实现
  let queue = [[0, 0]];
  let visited = new Set();
  let count = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    const i = node[0];
    const j = node[1];
    coordinateStr = `[${i},${j}]`;
    //终止条件 1.超出矩阵的 2.数位和大于k 3.已经遍历过的
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      getSum(i, j) > k ||
      visited.has(coordinateStr)
    ) {
      continue;
    } else {
      visited.add(coordinateStr);
      count++;
      //向右向下移动即可
      queue.push([i + 1, j]);
      queue.push([i, j + 1]);
    }
  }
  return count;
};
