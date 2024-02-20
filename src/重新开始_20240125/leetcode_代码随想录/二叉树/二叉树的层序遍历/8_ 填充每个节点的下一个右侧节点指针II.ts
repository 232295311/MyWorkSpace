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
  //与上一题的区别是，不一定是满二叉树
  if (root == null) {
    return [];
  }
  const queue = [root];
  //层序遍历，每一层都是逆序遍历即可
  while (queue.length > 0) {
    const length = queue.length;
    let lastNode = null;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      node.next = lastNode;
      lastNode = node;
      node.right && queue.push(node.right); //先传入右子节点
      node.left && queue.push(node.left);
    }
  }
  return root;
}
