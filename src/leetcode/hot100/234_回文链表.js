/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //联想：回文字符串的判断是依靠从n/2开始双指针，或者从尾到中间的双指针
  //但是链表没办法从尾向头移动。所以我们可以找到链表的中点，然后翻转中点后面的链表
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  fast = reverseList(slow); //fast指向反转后的链表头
  slow = head; //slow从头开始
  while (slow != null && fast != null) {
    if (slow.val != fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};
function reverseList(root) {
  //反转链表的函数
  let pre = null;
  let curr = root;
  while (curr != null) {
    let temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
  return pre;
}
