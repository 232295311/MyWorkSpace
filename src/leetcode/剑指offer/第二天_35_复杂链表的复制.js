/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return head;
  }
  let curr = head; //head不动，因为之后要重新遍历一遍

  const newListNode = new Node();
  let temp = newListNode; //新链表

  const map = new Map();
  while (curr != null) {
    temp.val = curr.val;
    temp.next = curr.next ? new Node() : null;
    map.set(curr, temp);
    curr = curr.next;
    temp = temp.next;
  }
  temp = newListNode; //回到起点
  while (head != null) {
    temp.random = head.random ? map.get(head.random) : null;
    head = head.next;
    temp = temp.next;
  }
  return newListNode;
};
