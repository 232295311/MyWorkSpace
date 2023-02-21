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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let pre = head;
  let curr = head;
  let count = 0;
  //倒数第k个等于正数第n-k个
  while (count < k) {
    curr = curr.next;
    count++;
  }
  while (curr != null) {
    curr = curr.next;
    pre = pre.next;
  }
  return pre;
};
