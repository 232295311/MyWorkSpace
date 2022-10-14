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
  let left = headA;
  let right = headB;

  //headA的长度为a headB的长度为b 相交部分的长度为c 不断地移动两个指针 最终他们会在第一个相交点相遇，因为此时他们走过的路程都是a+b-c
  // 如果他们不相交，则会在同一时刻都变成null，此时会退出循环
  while (left !== right) {
    left = left ? left.next : headB;
    right = right ? right.next : headA;
  }
  return left;
};
