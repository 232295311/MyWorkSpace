/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

/* 什么是类数组？
 * 是一个普通对象，不具备数组自带丰富的内建方法，写法上跟数组一样，但不是数组，原型是Object。
 * key是以数字或者字符串数字组成。（key是非负数索引）
 * 必须有length属性
 * 字符串具有类数组得特性，但一般类数组特指对象
 */

function isArrayLikeObject(obj) {
  // 不是对象直接返回
  if (obj == null || typeof obj !== "object") return false;
  // 判断是否有length属性 是原型上的length也不行
  if (!Object.prototype.hasOwnProperty.call(obj, "length")) return false;
  // 判断length是否为数值类型
  if (typeof obj.length !== "number") return false;
  // 判断length是否在正常得数值范围内
  if (!isFinite(obj.length)) return false;
  // 判断构造函数是否是Array
  if (Array === obj.constructor) return false;
  // 长度有效得值
  const lengthMaxValue = Math.pow(2, 53) - 1;
  if (arr.length >= 0 && arr.length < lengthMaxValue) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLikeObject(null)); // false
console.log(isArrayLikeObject({ 0: "a", 1: "b", length: 2 })); // true
console.log(isArrayLikeObject({ 0: 1, 2: 3, length: "" })); // false
console.log(isArrayLikeObject({ 0: 1, 2: 3 })); // false
console.log(isArrayLikeObject([1, 2])); // false
