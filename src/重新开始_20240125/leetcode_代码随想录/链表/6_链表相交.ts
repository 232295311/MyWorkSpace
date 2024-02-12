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
  //先把A和B出去共同长度。
  //假设A和B之间的长度相差k。
  //那么有两个指针a和b，同时开始遍历A和B，直到遍历结束，他们之间的差额就是k。
  //那怎么让他们之间的差额变成0呢？就让他们第二次遍历的时候互换起始位置，这样a和b遍历的长度都是A+B。
  //这个时候再把共同长度加进去，不影响上述结论，因为共同长度不影响k。
  //最后再同时移动a和b，a，b必定相交或者必定同时为空。即可完成解题。
  if (headA == null || headB == null) {
    return null;
  }
  let a = headA;
  let b = headB;
  while (a != b) {
    if (a == null) {
      a = headB;
      continue;
    }
    if (b == null) {
      b = headA;
      continue;
    }
    a = a.next;
    b = b.next;
  }
  if (a == null && b == null) {
    return null;
  } else {
    return a;
  }
};
