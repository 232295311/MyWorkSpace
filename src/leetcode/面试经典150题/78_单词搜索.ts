function exist(board: string[][], word: string): boolean {
  //经典题目
  const m = board.length;
  const n = board[0].length;

  let res: boolean = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, word);
        if (res) {
          return res;
        }
      }
    }
  }
  return res;

  function dfs(i: number, j: number, lastStr: string) {
    //递归终止条件
    if (lastStr === "") {
      res = true;
      return;
    }
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      board[i][j] === "visited" ||
      board[i][j] !== lastStr[0]
    ) {
      return;
    }
    const temp = board[i][j];
    board[i][j] = "visited"; //表示已经遍历过了
    lastStr = lastStr.substring(1);

    dfs(i - 1, j, lastStr); //上
    dfs(i, j + 1, lastStr); //右
    dfs(i + 1, j, lastStr); //下
    dfs(i, j - 1, lastStr); //上
    board[i][j] = temp; //回溯
  }
}
