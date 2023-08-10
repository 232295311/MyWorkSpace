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

function sortList(head: ListNode | null): ListNode | null {
  //先找出链表的中分节点  然后划分成两个链表 以此类推 直至最后每个链表只剩一个节点
  //   然后向上合并 相当于每次都合并两个有序链表  归并排序
  if (head == null || head.next == null) {
    return head;
  }
  const midNode = findMidNode(head);
  let temp = midNode.next;
  midNode.next = null;

  const left = sortList(head);
  const right = sortList(temp);
  return mergeTwoList(left, right);
}

function findMidNode(head): ListNode | null {
  if (head == null) {
    return null;
  }
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function mergeTwoList(list1, list2): ListNode | null {
  //合并两个有序链表
  //递归终止条件
  if (list1 == null) {
    return list2;
  }
  if (list2 == null) {
    return list1;
  }
  if (list1.val <= list2.val) {
    list1.next = mergeTwoList(list1.next, list2.next);
    return list1;
  } else {
    list2.next = mergeTwoList(list1, list2.next);
    return list2;
  }
}
