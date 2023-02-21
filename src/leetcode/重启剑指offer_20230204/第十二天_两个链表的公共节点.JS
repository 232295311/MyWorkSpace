/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currA = headA;
  let currB = headB;
  //   while (currA !== currB) {
  //     currA = currA.next ? currA.next : headB;
  //     currB = currB.next ? currB.next : headA;
  //   }
  //  这里不能用curr.next?来判断，因为如果两条链表没有交点，则会无限循环下去。
  //  所以改用curr当前是否为空来判断，因为遍历两遍后，如果两条链表都没有交点，此时他们会同时指向null（即尾结点）
  while (currA !== currB) {
    currA = currA == null ? headB : currA.next;
    currB = currB == null ? headA : currB.next;
  }
  return currA;
};
