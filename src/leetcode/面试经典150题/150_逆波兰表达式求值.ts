/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function evalRPN(tokens: string[]): number {
  //tokens是一个后缀表达式
  let stack: number[] = [];
  for (let char of tokens) {
    if (/\d/.test(char)) {
      stack.push(Number(char));
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();
      const res = eval(`${num1}${char}${num2}`);
      stack.push(res);
    }
  }
  return stack.pop() as number;
}
