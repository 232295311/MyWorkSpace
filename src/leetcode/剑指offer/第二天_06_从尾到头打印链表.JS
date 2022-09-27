/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var fun1 = (head, arr) => {
  if (!head) {
    return;
  }
  if (head != null) {
    fun1(head.next);
    arr.push(head.val);
  }
};

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const res = [];

  fun1(head, res);
  return res;
};
