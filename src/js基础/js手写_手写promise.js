function Promi(executor) {
  let _this = this;
  _this.$$status = "pending";
  _this.failCallback = undefined;
  _this.successCallback = undefined;
  _this.error = undefined;

  executor(resolve.bind(_this), reject.bind(_this));

  function resolve(params) {
    console.log("this", "params", this);
    if (_this.$$status === "pending") {
      _this.$$status = "success";
      _this.successCallback(params);
    }
  }
  function reject(params) {
    if (_this.$$status === "pending") {
      _this.$$status = "fail";
      _this.failCallback(params);
    }
  }
  Promi.prototype.then = function (succ, fail) {
    this.successCallback = succ;
    this.failCallback = fail;
  };
}

const a = new Promi(function (resolve, reject) {
  console.log("??", params);
  setTimeout(() => {
    console.log("___");
    resolve("成功");
  }, 2000);
}).then((params) => console.log("then里打印", params));
