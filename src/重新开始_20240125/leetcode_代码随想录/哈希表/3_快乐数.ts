function isHappy(n: number): boolean {
  // 2 4 16 37 58 89 136 16 37 58 89....
  // 3 9 81 65 61 37 58 89 136 16 37 58...
  // 5 25 29 85 89 136 16 37 58 ...
  // 6 36 47 67 85 89 136 16 37 58 ...
  // 感觉不是快乐数的都会出现循环~
  function getSum(n) {
    let sum = 0;
    String(n)
      .split("")
      .map((item) => Number(item))
      .forEach((item) => {
        sum += item * item;
      });
    return sum;
  }
  const map = {};
  while (true) {
    const sum = getSum(n);
    if (sum === 1) {
      return true;
    } else {
      if (map[sum] === undefined) {
        map[sum] = true;
        n = sum; //更新n
      } else {
        //如果出现过
        return false;
      }
    }
  }
}
