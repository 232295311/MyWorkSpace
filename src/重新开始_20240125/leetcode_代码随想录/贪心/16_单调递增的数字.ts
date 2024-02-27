function monotoneIncreasingDigits(n: number): number {
  //从右往左，每次遇到左边的数字比右边大，则左边的数字-1，右边所有数字都置为“9”
  const arr = n
    .toString()
    .split("")
    .map((item) => Number(item));
  let lastIndex = -1; //不用每次都置换右边所有数字，记录最后一次置换的点即可
  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i - 1] > arr[i]) {
      arr[i - 1] = arr[i - 1] - 1;
      lastIndex = i;
    }
  }
  if (lastIndex !== -1) {
    for (let i = lastIndex; i < arr.length; i++) {
      arr[i] = 9;
    }
  }
  return Number(arr.join(""));
}
