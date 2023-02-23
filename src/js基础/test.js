/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

// function ABC() {
//   console.log(arguments); //
//   console.log(Array.prototype.slice.call(arguments)); //意义就在于它能将函数的参数对象转化为一个真正的数组。
//   console.log(Array.from(arguments)); //与上一行作用一致
// }
// ABC(1, 2, 3, 4);
function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

let obj = {
  wuhu: undefined,
  name: "chen",
  age: "18",
  toStr: function () {
    return this.age + this.name;
  },
  quote: {
    name: "zhang",
    son: {
      name: "li",
    },
  },
};

const res = deepClone(obj);
console.log(res);

res.quote.name = "？？？？？";
console.log(res);
console.log(obj);

const res2 = Object.assign({}, obj);
console.log(res2);
res2.quote.name = "zhang2222";
console.log(res2);
console.log(obj);
