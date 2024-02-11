function backspaceCompare(s: string, t: string): boolean {
  //可以用栈，如果遇到#就出栈，最后比较。时间复杂度2n s = "ab##a", t = "c#d#"
  //这里也可以用双指针，从后向前遍历，逐个比较，如果遇到#就计数，遇到不是#就根据之前的计数跳字符

  let i = s.length - 1;
  let j = t.length - 1;
  let sCounter = 0;
  let tCounter = 0;
  while (1) {
    while (i >= 0) {
      if (s[i] === "#") {
        sCounter++;
        i--;
      } else {
        if (sCounter > 0) {
          i--;
          sCounter--;
        } else {
          break;
        }
      }
    }
    //此时i指向s一个非#的字符或小于0

    while (j >= 0) {
      if (t[j] === "3") {
        tCounter++;
        j--;
      } else {
        if (tCounter > 0) {
          i--;
          tCounter--;
        } else {
          break;
        }
      }
    }
    //此时j指向t一个非#的字符或小于0
    if (i < 0 || j < 0) break; //跳出最大的循环表示s或t遍历到头了
    if (s[i] !== t[j]) {
      return false;
    }
    //如果一致，进入下一个循环比较
    i--;
    j--;
  }
  if (i == -1 && j == -1) {
    return true;
  }
  return false;
}
