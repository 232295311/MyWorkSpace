function letterCombinations(digits: string): string[] {
  if (digits == "") {
    return [];
  }
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const res: string[] = [];
  const length = digits.length;
  helper(0, "");

  function helper(start, resStr) {
    if (resStr.length === length) {
      res.push(resStr);
      return;
    }
    const arr = map[digits[start]]; //[d,e,f]
    for (let i = 0; i < arr.length; i++) {
      resStr += arr[i]; //操作
      helper(start + 1, resStr);
      resStr = resStr.substring(0, resStr.length - 1); //回溯
    }
  }
  return res;
}
