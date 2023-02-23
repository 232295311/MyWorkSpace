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
