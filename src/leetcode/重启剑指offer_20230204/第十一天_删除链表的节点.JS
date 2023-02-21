/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val == val) {
    //删除头节点的情况
    return head.next;
  }
  let curr = head;
  while (curr.val !== val) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
};
