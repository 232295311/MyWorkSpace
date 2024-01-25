function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }
  //直接模拟种花即可
  let i = 0;
  while (i < flowerbed.length) {
    if (flowerbed[i] === 1) {
      //如果这个地方已经被种了花，那它的下一格也不能种,i+2
      i = i + 2;
    } else if (flowerbed[i] === 0) {
      //如果这个地方没有被种花，那它的i-1格也必定是没有被种花的，不然这一格就被跳过了。
      if (i + 1 === flowerbed.length || flowerbed[i + 1] === 0) {
        //那么如果它的下一格是0或者下一格是边界，就可以种花了
        flowerbed[i] = 1;
        n--;
        if (n <= 0) {
          return true;
        }
        //能在这个地方种完花，下一格一定是空白的，那就跳两格
        i = i + 2;
      } else {
        //如果这个地方不能种的话，说明下一格一定是花了，那就跳三格
        i = i + 3;
      }
    }
  }
  return false;
}
