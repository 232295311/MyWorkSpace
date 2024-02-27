function lemonadeChange(bills: number[]): boolean {
  //可以用map来记录当前身上还有多少零钱
  // 但是怎么样才是最贪心的找零策略呢？
  const map = new Object({ "5": 0, "10": 0 });
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      //如果遇到5，一律收下
      map["5"]++;
    }
    if (bills[i] === 10) {
      //如果遇到10，只有一种情况，就是得找回5块钱
      if (map["5"] > 0) {
        map["5"]--;
        map["10"]++;
      } else {
        return false;
      }
    }
    if (bills[i] === 20) {
      //如果遇到20，就得找回15块钱，要么是三张5，要么是一张10+一张5
      //这里要怎么取舍？优先选择一张10+一张5，因为10只有在这里才用到，5可以在任何地方都用到。
      //如果你有一张10,四张5，先还三张5了之后，在遇上两次付给10美元的顾客，就无法继续了，反之却可以。
      if (map["5"] > 0 && map["10"] > 0) {
        map["10"]--;
        map["5"]--;
      } else if (map["5"] >= 3) {
        map["5"] -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
