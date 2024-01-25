/*
 * @Description:
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
  this.inStack.push(value); //不断得往instack末尾加元素
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.outStack.length) {
    return this.outStack.pop();
  } else {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
    return this.outStack.length > 0 ? this.outStack.pop() : -1;
  }
};

export default CQueue;
