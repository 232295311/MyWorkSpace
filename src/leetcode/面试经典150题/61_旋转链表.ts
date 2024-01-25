/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }
  let length = 0;
  let curr = head;
  while (curr != null) {
    curr = curr.next;
    length++;
  }
  k = k % length; //像长度为3，k为4，其实就相当于旋转1次

  //第二次遍历 先让fast走k步，再同时移动快慢指针直到尽头，则慢指针此时位置就是断开的位置
  let slow = head;
  let fast = head;
  while (k > 0) {
    fast = fast.next;
    k--;
  }
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  const newHead = slow.next;
  slow.next = null;
  fast.next = head;
  return newHead;
}
