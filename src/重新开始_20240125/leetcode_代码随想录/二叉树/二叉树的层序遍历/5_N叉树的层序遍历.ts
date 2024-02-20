/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  if (root == null) {
    return [];
  }
  //用队列实现层序遍历  与二叉树不同每次遍历时将全部子节点一股脑全放进队列里即可
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    const tempArr = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      tempArr.push(node.val);
      queue.push(...node.children);
    }
    res.push(tempArr);
  }
  return res;
}
