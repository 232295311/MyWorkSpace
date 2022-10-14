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

  const dfs = (i, j, k, visited) => {
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
      return 0;
    }
    // dfs操作：加入visited，向下向右移动
    visited.add(coordinateStr);
    return 1 + dfs(i + 1, j, k, visited) + dfs(i, j + 1, k, visited);
  };

  //再先写一份DFS的
  //用递归来实现
  let visited = new Set();
  return dfs(0, 0, k, visited);
};
