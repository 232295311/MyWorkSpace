/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  //递归终止条件
  if (head.next == null || head == null) {
    return;
  }

  const tailHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return tailHead;
};
