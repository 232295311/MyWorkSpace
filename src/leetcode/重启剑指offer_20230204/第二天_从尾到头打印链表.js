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
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let res = [];
  let func1 = function (curr) {
    //递归终止条件：
    if (curr == null) {
      return;
    }
    func1(curr.next);
    res.push(curr.val);
  };
  func1(head);
  return res;
};
