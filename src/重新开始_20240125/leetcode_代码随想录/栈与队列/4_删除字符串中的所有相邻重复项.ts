function removeDuplicates(s: string): string {
  //一次只能删两个 如'xxx'最后会剩'x'
  //让我想起了退格字符串 也是用栈实现
  //根据经验，可能快慢指针也可以
  const stack: string[] = [];
  for (let char of s) {
    if (stack.at(-1) === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}
