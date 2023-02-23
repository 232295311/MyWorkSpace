// 纯es5实现，并且可以使用第二个括号里的参数
// Array.prototype.push.bind(arr1)(2,3,4,5)

Function.prototype.myBind = function () {
  var args = Array.prototype.slice.call(arguments);
  var thisArg = args.shift();
  var fn = this;
  if (typeof fn !== "function") {
    throw new Error();
  }
  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    return fn.apply(thisArg, args.concat(args2));
  };
};

let arr1 = [0, 0, 0];
Array.prototype.push.bind(arr1, 2, 3, 4, 5)(); //arr1: [0, 0, 0, 2, 3, 4, 5]
let arr2 = [0, 0, 0];
Array.prototype.push.bind(arr2)(2, 3, 4, 5); //arr2: [0, 0, 0, 2, 3, 4, 5]
let arr3 = [0, 0, 0];
Array.prototype.push.myBind(arr3, 2, 3, 4, 5)(); //arr3: [0, 0, 0, 2, 3, 4, 5]
let arr4 = [0, 0, 0];
Array.prototype.push.myBind(arr4)(2, 3, 4, 5); //arr4: [0, 0, 0, 2, 3, 4, 5]
