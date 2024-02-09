function decodeString(s: string): string {
  //相当于遍历，遇到'数字'就进行解码.注意会有嵌套
  //"3[a2[c]]"
  //   let res: string = "";
  let i = 0;
  let stack: string[] = [];
  while (i < s.length) {
    if (s[i] === "]") {
      //如果遇到']'，执行出栈流程
      let tempStr = "";
      let tempNum = "";
      while (stack.at(-1) !== "[") {
        tempStr = stack.pop() + tempStr; //拼接在tempStr头部
      }
      //此时栈顶是[ 弹出不要
      stack.pop();
      //此时栈顶是数字
      while (stack.at(-1)?.match(/\d/)) {
        tempNum = stack.pop() + tempNum; //拼接tempNum
      }
      let counter = Number(tempNum);
      while (counter > 0) {
        stack.push(tempStr);
        counter--;
      }
    } else {
      stack.push(s[i]);
    }
    i++;
  }
  return stack.join("");
}
