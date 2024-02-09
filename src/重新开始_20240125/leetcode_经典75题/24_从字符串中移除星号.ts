function removeStars(s: string): string {
  //相当于遍历，遇到'*'就删除上一个遍历到的元素。
  //我们可以用栈入，栈出的方式模仿添加和删除。
  let res: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      res.pop();
    } else {
      res.push(s[i]);
    }
  }
  return res.join("");
}
