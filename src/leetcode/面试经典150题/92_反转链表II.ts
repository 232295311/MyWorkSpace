// /*
//  * @Description:
//  * @Author: Tulandbla
//  * @GitHubUserName: 232295311@qq.com
//  */
// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// function reverseBetween(
//   head: ListNode | null,
//   left: number,
//   right: number
// ): ListNode | null {
//   if (left === right) {
//     return head;
//   }
//   const recur = (curr, count) => {
//     if (count === right) {
//       last = curr.next;
//       return curr;
//     }
//     // if (curr == null) {
//     //   return null;
//     // }
//     const newNode = recur(curr.next, count + 1);
//     curr.next.next = curr;
//     curr.next = last; //只有最后一次递归才会生效
//     return newNode; //传递结果
//   };
//   let last = null; //记录不需要翻转的剩余节点
//   let pre = null; //记录翻转前curr的位置的
//   let curr = head; //翻转的起点
//   let rightCount = 1;
//   let leftCount = 1;
//   while (leftCount < left) {
//     pre = curr;
//     curr = curr.next;
//     leftCount++;
//     rightCount++;
//   }
//   if (pre != null) {
//     pre.next = recur(curr, rightCount);
//     return head;
//   } else {
//     return recur(curr, rightCount);
//   }
// }

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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  //写个迭代的，用双指针，g指向要开始翻转的地方，p指向翻转的第一个节点，然后每次都将p后面一个节点放到g和p之间就可以了

  // 定义一个dummyHead, 方便处理
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let g = dummyHead;
  let p = dummyHead.next;
  let countG = 1;
  let countP = 1;
  while (countG < left) {
    g = g.next;
    p = p.next;
    countG++;
  }
  while (countP < right - left) {
    const tempHead = p.next;
    p.next = p.next.next;
    tempHead.next = p;
    g.next = tempHead;
    countP++;
  }
  return head;
}
