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

function detectCycle(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }
  let slow = head;
  let fast = head;

  while (true) {
    if (fast == null || fast.next == null) {
      return null; //没有环
    }
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      break;
    }
  }
  //此时fast和slow第一次相遇，代表有环。

  //接着fast重新回到head，第二轮相遇，即可找到环的起点
  fast = head;
  while (slow != fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}
