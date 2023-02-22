/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
function Super(name) {
  this.flag = true;
  this.myName = name;
}
Super.prototype.getFlag = function () {
  return this.flag;
};

function Sub() {
  this.subFlag = false;
}
Sub.prototype = new Super();
let obj = new Sub();
console.log(obj);

obj.__proto__ === Sub.prototype; // true
obj.__proto__.__proto__ === Super.prototype; // true
console.log(Sub.prototype.__proto__ === Super.prototype); //true
//所以在后面组合继承的时候才需要 Sub.prototype = Object.create(Super.prototype);

function myNew() {
  const constructor = Array.prototype.shift.call(arguments); //只要第一个 注意这里是shift
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}
let myobj = myNew(Super, "chen");
console.log(myobj);

function ABC() {
  console.log(arguments); //
  console.log(Array.prototype.slice.call(arguments)); //意义就在于它能将函数的参数对象转化为一个真正的数组。
  console.log(Array.from(arguments)); //与上一行作用一致
}

ABC(1, 2, 3, 4);
