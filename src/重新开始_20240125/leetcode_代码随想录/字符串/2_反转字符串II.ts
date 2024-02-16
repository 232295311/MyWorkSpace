function reverseStr(s: string, k: number): string {
  //反转的时候用双指针即可,除此之外就是计数了
  const strArr = s.split("");
  for (let i = 0; i < strArr.length; i += 2 * k) {
    swap(i, k, strArr);
  }

  function swap(i: number, k: number, s: string[]): void {
    //翻转从i到i+k之间的字符
    //计算end 如果i+k已经超过结尾，就全部都反转。不然就只翻转i到i+k-1之间的字符
    const end = i + k < s.length ? i + k - 1 : s.length - 1;
    let left = i;
    let right = end;

    while (left < right) {
      const temp = s[left];
      strArr[left] = s[right];
      strArr[right] = temp;
      left++;
      right--;
    }
  }
  return strArr.join("");
}
