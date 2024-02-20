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

function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  //递归终止条件 1.到叶子节点
  //   if (root.left == null && root.right == null) {
  //     return 1;
  //   }
  //   //2.如果只有左子树或者只有右子树
  //   if (root.left == null) {
  //     return 1 + maxDepth(root.right);
  //   }
  //   if (root.right == null) {
  //     return 1 + maxDepth(root.left);
  //   }
  //   //3.如果左右子树都存在
  //   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return 1 + Math.max(left, right);
}
