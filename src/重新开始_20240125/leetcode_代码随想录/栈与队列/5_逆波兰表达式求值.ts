function evalRPN(tokens: string[]): number {
  /**
         *逆波兰表达式：
        逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。
        平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
        该算式的逆波兰表达式写法为  1 2 +  3 4 + *  。
         */
  const stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case "+":
      case "-":
      case "*":
      case "/":
        const numRight = stack.pop()!;
        const numLeft = stack.pop()!;
        const res = calculateRes(
          numLeft,
          tokens[i] as "+" | "-" | "*" | "/",
          numRight
        );
        stack.push(res); //重新压进去 遍历继续
        break;
      default:
        stack.push(Number(tokens[i]));
    }
  }
  return stack[0];
  function calculateRes(
    numLeft: number,
    token: "+" | "-" | "*" | "/",
    numRight: number
  ): number {
    switch (token) {
      case "+":
        return numLeft + numRight;
      case "-":
        return numLeft - numRight;
      case "*":
        return numLeft * numRight;
      case "/":
        return parseInt("" + numLeft / numRight);
    }
  }
}
