function change(amount: number, coins: number[]): number {
  //可以用回溯，但是会超时，写一下吧
  coins.sort((a, b) => a - b);
  const res: any[] = [];
  const path: any[] = [];
  let pathSum = 0;
  backStracking(0);
  function backStracking(startIndex) {
    if (pathSum > amount) {
      return;
    }
    if (pathSum == amount) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < coins.length; i++) {
      if (pathSum + coins[i] > amount) {
        break; //剪枝
      }
      pathSum += coins[i];
      path.push(coins[i]);
      backStracking(i);
      pathSum -= coins[i];
      path.pop();
    }
  }
  return res.length;
}
