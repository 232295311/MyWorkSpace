/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  // bfs 用队列完成逆序的层序遍历
  if (root === null) {
    return null;
  }
  let queue = [root];
  while (queue.length > 0) {
    let length = queue.length;
    let temp: null | Node = null; //next指针需要指向的那个点
    for (let i = 0; i < length; i++) {
      const node: Node = queue.shift();
      node.next = temp;
      temp = node;
      node.right && queue.push(node.right); //先插右边
      node.left && queue.push(node.left);
    }
  }
  return root;
}
