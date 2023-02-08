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
  //两次遍历链表，第一次遍历做的是：复制主链表，并且将每一个节点的random的值都保存在Map里面，遍历map的时候，是可以按照添加的顺序遍历的。
  //第二次遍历，往第一步里面复制出来的链表中挂载map里面记载的random节点。
  if (head == null) {
    return null;
  }
  let curr1 = head;
  let curr2 = head;
  let res = new Node();
  let map = new Map();
  while (curr1 != null) {
    const newNode = new Node();
    res.val = curr1.val;
    res.next = curr1.next ? newNode() : null;
    map.set(curr1, res);
    curr1 = curr1.next;
    res = res.next;
  }
  res = head; //重置res指针
  while (curr2 != null) {
    res.random = curr2.random ? map.get(curr2.random) : null;
    res = res.next;
    curr2 = curr2.next;
  }
  return head;
};
