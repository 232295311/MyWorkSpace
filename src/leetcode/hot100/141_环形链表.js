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
 * @return {boolean}
 */
var hasCycle = function (head) {
  //容易想到的是hash
  //这里用双指针吧，快指针和慢指针
  let fast = head.next;
  let slow = head;
  while (fast != null) {
    fast = fast.next;
    if (fast != null) {
      fast = fast.next;
    }
    if (slow === fast) {
      return;
    }
  }
};
