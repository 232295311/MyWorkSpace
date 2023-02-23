/*
 * @Description:
 *
 * 如果reduce没有第二个参数表示初始值：第一次遍历时，pre指向index0位置的元素，curr指向index1位置的元素，index从1开始。
 *
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
const arr = [1, 2, 3, 4, 5];
arr.reduce((pre, curr, index, arr) => {
  console.log("pre:", pre, "curr:", curr, "index", index);
}); //如果不指定初始值，pre将从1 curr将从2开始。index从1开始

arr.reduce((pre, curr, index, arr) => {
  console.log("pre:", pre, "curr:", curr, "index", index);
}, 100); //如果指定了初始值，pre将从初始值 curr将从1开始。index从0开始

//利用reduce实现一个自己的map map的第二个参数是this，如果不传，默认就是一个数组
Array.prototype.myMap = function (fn, thisValue) {
  console.log(this);
  //map返回一个新数组
  let res = [];
  thisValue = thisValue || []; //如果map指定this，拿到他
  //如果这里要用this，注意别写成箭头函数。如果写成箭头函数，就用Array.prototype代替this
  this.reduce((pre, curr, index, arr) => {
    res.push(fn.call(thisValue, curr, index, arr));
  }, 99999); //这里第二个参数无所谓是什么 但是一定得给 不然curr和index就不会从下标为0开始了
  return res;
};

const arr2 = [10, 20, 30, 40, 50];
const newArr = arr2.myMap(
  function (value) {
    return this.str + String(value * value);
  },
  { str: "myMap" }
);
const newArr2 = arr2.map(
  function (value) {
    console.log(this); //{ str: "Map" }
    return this.str + String(value * value);
  },
  { str: "Map" }
);
console.log(newArr); //['myMap100', 'myMap400', 'myMap900', 'myMap1600', 'myMap2500']
console.log(newArr2); //['Map100', 'Map400', 'Map900', 'Map1600', 'Map2500']

const newArr3 = arr2.map(function (value) {
  console.log(this); //window
  return String(value * value);
});
