function Promi(executor) {
  console.log("this", this);
  let _this = this;
  _this.$$status = "pending";
  _this.failCallback = undefined;
  _this.successCallback = undefined;
  _this.error = undefined;

  executor(resolve.bind(_this), reject.bind(_this));

  function resolve(params) {
    // console.log(this === _this); 'true'
    if (_this.$$status === "pending") {
      _this.$$status = "success";
      _this.successCallback && _this.successCallback(params);
    }
  }
  function reject(params) {
    if (_this.$$status === "pending") {
      _this.$$status = "fail";
      _this.failCallback && _this.failCallback(params);
    }
  }
  Promi.prototype.then = function (succ, fail) {
    this.successCallback = succ;
    this.failCallback = fail;
    //应该返回一个promise对象，以供链式调用
  };
  return this;
}

const abc = new Promi(function (resolve, reject) {
  setTimeout(() => {
    console.log("___");
    resolve("成功");
  }, 2000);
});

console.log(abc);
Promise.resolve("wudi").then;
