/*
 * @Descripttion:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/*
 * @Descripttion:用两个栈实现队列
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
const CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.outStack.length === 0) {
    if (this.inStack.length === 0) {
      return -1;
    }
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  return this.outStack.pop();
};

export default CQueue;
