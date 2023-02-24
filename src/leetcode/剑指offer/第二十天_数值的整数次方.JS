/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  //假设要求x^32,如果使用n*n,得循环32次。
  //如果我们知道x^16,x^8,x^4,x^2，那么我们一共5次就可以得出。
  let res = 1;
  let abn = n < 0 ? -n : n; //如果n小于0，无所谓，先乘出来结果最后取倒数就行
  while (abn > 0) {
    if (abn & (1 === 1)) {
      //按位与运算操作符，如果为1表示奇数，如果为0表示偶数
      res *= x; //如果是奇数，先自己乘以一个x
    }
    x *= x; //x的平方
    abn >>>= 1; //无符号右移，表示除以2，如果这里用(>>)右符号右移，则测试用例2的-2147483648会过不去
  }
  return n < 0 ? 1 / res : res;
};
