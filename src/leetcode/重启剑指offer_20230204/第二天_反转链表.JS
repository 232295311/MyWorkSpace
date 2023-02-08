/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  //递归终止条件
  if (head == null || head.next == null) {
    return head;
  }
  //递归继续
  const newNode = reverseList(head.next);
  //递归中进行的操作
  head.next.next = head;
  head.next = null;
  return newNode;
};
