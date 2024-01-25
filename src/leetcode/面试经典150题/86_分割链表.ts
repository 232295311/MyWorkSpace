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

function partition(head: ListNode | null, x: number): ListNode | null {
  let smlDummy = new ListNode(0);
  let currSml = smlDummy;
  let bigDummy = new ListNode(0);
  let currBig = bigDummy;

  let curr = head;
  while (curr != null) {
    if (curr.val < x) {
      currSml.next = new ListNode(curr.val);
      currSml = currSml.next;
    } else {
      currBig.next = new ListNode(curr.val);
      currBig = currBig.next;
    }
  }
  currSml.next = bigDummy.next;
  return smlDummy.next;
}
