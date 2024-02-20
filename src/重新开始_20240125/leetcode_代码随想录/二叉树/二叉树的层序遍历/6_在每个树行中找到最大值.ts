/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function largestValues(root: TreeNode | null): number[] {
  //BFS层序遍历，比DFS根据深度进行遍历计算要来得方便些
  if (root == null) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      max = Math.max(max, node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(max);
  }
  return res;
}
