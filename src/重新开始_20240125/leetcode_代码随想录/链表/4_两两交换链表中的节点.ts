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

function swapPairs(head: ListNode | null): ListNode | null {
  //题目相当于要求12互换 34互换
  //虚拟头节点 类似数组交换
  let pre = new ListNode(0, head);
  let currPre = pre;
  let curr = head;
  while (curr != null && curr.next != null) {
    let temp = curr.next.next; //temp暂存3
    currPre.next = curr.next; //currPre指向2
    head.next = temp; //1指向3
    currPre.next.next = curr; //currPre.next是2,2指向1

    //下一轮交换 3是curr 3前面的节点（1）是currPre
    currPre = curr;
    curr = temp;
  }
  return pre.next;
}
