/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const dfs = (i, j, board, word) => {
    if (!word) {
      return true;
    }
    //递归终止条件：1.如果超出矩阵范围 2.当前数字和word所需数字不一样 3.当前数字已经遍历过了
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[0]) {
      return false;
    }
    board[i][j] = "-"; //表示已经遍历过
    const newWord = word.substring(1); //去掉第一位数
    //递归操作：上右下左方向移动一格
    return (
      dfs(i - 1, j, board, newWord) ||
      dfs(i, j + 1, board, newWord) ||
      dfs(i + 1, j, board, newWord) ||
      dfs(i, j - 1, board, newWord)
    );
  };

  // m*n的矩阵
  const m = board.length;
  const n = board[0].length;
  const beginWord = word[0];
  // 找到起始位置
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === beginWord) {
        if (dfs(i, j, board, word) === true) {
          return true;
        } else {
          continue;
        }
      }
    }
  }
};
