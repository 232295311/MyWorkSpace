/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  //dfs和回溯
  let m = board.length;
  let n = board[0].length;
  let res = false;
  let map = new Map();

  const dfs = (i, j, board, lastWord) => {
    //递归终止条件
    //1. 剩下的word为空，说明匹配完了
    //2. board[i][j]不合适或者i、j超出了范围或者已经遍历过了
    if (lastWord === "") {
      return true;
    }
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      board[i][j] !== lastWord[0] ||
      map.get(board[i][j]) === true
    ) {
      return false;
    }
    //递归期间需要进行的操作
    //1.遍历过的位置记录下来
    //2.往上下左右四个方向走，看看是否能进行下去
    map.set(board[i][j], true);
    const newStr = lastWord.substring(1); //去掉第一个字符
    return (
      dfs(i - 1, j, board, newStr) ||
      dfs(i, j + 1, board, newStr) ||
      dfs(i + 1, j, board, newStr) ||
      dfs(i, j - 1, board, newStr)
    );
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; i < n; j++) {
      if (board[i][j] === word[0]) {
        let res = dfs(i, j, board, word);
        if (res) {
          return true;
        } else {
          continue;
        }
      }
    }
  }
  return false;
};
