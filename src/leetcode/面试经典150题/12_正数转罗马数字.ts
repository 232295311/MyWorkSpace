function intToRoman(num: number): string {
  let map = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  let str = "";
  const keysArr = Object.keys(map)
    .map((item) => Number(item))
    .sort((a, b) => b - a);

  for (let i = 0; i < keysArr.length; i++) {
    const key: number = keysArr[i];
    let count = Math.floor(num / key); // 4980/1000=4.98
    while (count > 0) {
      str += map[key];
      count--;
      num -= key;
    }
  }
  return str;
}
