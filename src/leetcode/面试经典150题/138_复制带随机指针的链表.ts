/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  //遍历两遍，第一遍生成普通链表，并记录每个节点所在位置
  //第二遍为random节点赋值
  if (head == null) {
    return null;
  }
  let map = new Map();
  let newList = new Node(head.val);
  map.set(head, newList);
  const newListHead = newList;
  let curr = head.next;
  while (curr != null) {
    const node = new Node(curr.val);
    newList.next = node;
    newList = newList.next;
    map.set(curr, newList);
    curr = curr.next;
  }

  curr = head;
  newList = newListHead;
  while (curr != null) {
    const random = map.get(curr.random);
    if (random == null) {
      newList.random = null;
    } else {
      newList.random = random;
    }
    newList = newList.next;
    curr = curr.next;
  }

  return newListHead;
}
