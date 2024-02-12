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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head == null) {
    return null;
  }
  //虚拟头节点
  let data = new ListNode(0, head);
  let pre = data;
  let curr = head;

  while (curr !== null) {
    if (curr.val !== val) {
      pre = pre.next;
    } else {
      pre.next = curr.next;
    }
    curr = pre.next;
  }
  return data.next;
}
