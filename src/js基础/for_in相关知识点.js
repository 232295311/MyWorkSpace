/*
 * @Description:
 *
 * for...in...遍历自身和原型链上的所有的可枚举的属性名和方法名，但不包括Symbol。
 * 用obj.hasOwnProperty可以过滤掉原型链上的方法名和属性名。
 *
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
let obj = { [Symbol("abc")]: 111, a: "a", b: "b", c: "c" };
for (let i in obj) {
  // if (i === "c") {
  //   break; //会生效，能中断！
  // }
  console.log(i); //不会打印Symbol
}
class AAA {
  constructor() {
    this.state = "ready";
    this.num = 10;
  }
}

class BBB extends AAA {
  constructor() {
    super();
    this.num2 = 188;
  }
}

AAA.prototype.age = 18;
AAA.prototype.toString = () => {
  return "str";
};

let myObj = new BBB();

for (let key in myObj) {
  console.log("key:", key, "isOwnProperty:", myObj.hasOwnProperty(key));
}
