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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (n === 1 && head.next == null) {
    return null;
  }
  //快慢指针
  const pre = new ListNode(0, head);
  let slow = pre;
  let fast = pre;
  //从虚拟头节点出发，走k步能到链表最后一个元素，倒数第n个等于正数第k-n+1个。可以遍历一遍先求得链表长度，然后再遍历第二次删除节点。
  //也可以让快指针先走n+1步，然后快慢指针一起走到空节点，这样慢指针的位置就走了k-n-1步。
  //此时慢指针的位置就是要删除节点的前一个节点
  while (n + 1 > 0) {
    fast = fast.next;
    n--;
  }
  while (fast != null && fast.next != null) {
    fast = fast.next;
    slow = slow.next; //到位后慢指针就是要删除坐标的前一个
  }
  slow.next = slow.next.next;
  return pre.next;
}
