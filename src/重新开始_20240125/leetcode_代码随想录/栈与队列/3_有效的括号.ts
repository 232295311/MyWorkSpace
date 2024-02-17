function isValid(s: string): boolean {
  const leftMap = { "(": true, "{": true, "[": true };
  const rightMap = { ")": "(", "}": "{", "]": "[" };
  const stack: string[] = [];
  for (let char of s) {
    if (leftMap[char] === true) {
      stack.push(char);
    } else {
      const needChar = rightMap[char];
      if (stack.at(-1) === needChar) {
        //如果栈顶和遍历到的右括号匹配
        stack.pop(); //弹出栈顶元素，遍历继续
      } else {
        return false;
      }
    }
  }
  return stack.length === 0; //如果此时栈没有元素，说明都给匹配完了，返回true
}
