/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  //深度优先搜索和回溯
  let res = 0;
  const map = {};
  const isSmallK = (i, j, k) => {
    //计算i和j的数位和 是否小于k
    let num = (String(i) + String(j)).split("").reduce((pre, curr) => {
      return Number(pre) + Number(curr);
    });
    return num <= k;
  };

  const dfs = (i, j, k) => {
    //递归终止条件
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      isSmallK(i, j, k) === false ||
      map[`${i},${j}`] === "_"
    ) {
      return;
    }
    //递归时进行的操作
    res++;
    map[`${i},${j}`] = "_"; //表示已经被遍历过
    dfs(i - 1, j, k);
    dfs(i, j + 1, k);
    dfs(i + 1, j, k);
    dfs(i, j - 1, k);
  };
  dfs(0, 0, k);
  return res;
};
