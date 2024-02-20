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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
}
