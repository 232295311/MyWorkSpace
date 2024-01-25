/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  //链表是已经排序好了的，
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let curr = head;
  let pre = dummyHead;
  while (curr != null) {
    while (curr.next != null && curr.val === curr.next.val) {
      curr = curr.next;
    }
    if (pre.next === curr) {
      pre = pre.next;
    } else {
      pre.next = curr.next;
    }
    curr = curr.next;
  }
  return dummyHead.next;
}
