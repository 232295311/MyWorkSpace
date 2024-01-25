/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function simplifyPath(path: string): string {
  // 一个点 两个点 多个斜杠 单个斜杆 其他都是目录名
  //多个斜杠变为单个斜杠
  path = path.replace(/\/+/g, "/");
  const arr = path.split("/");
  arr.shift(); //始终以/开头，第一个元素没意义
  let res = "/";
  let stack: string[] = [];
  for (let str of arr) {
    if (str === ".") {
      continue;
    }
    if (str === "..") {
      stack.length > 0 && stack.pop();
      continue;
    }
    stack.push(str);
  }
  return "/" + stack.join("/");
}
