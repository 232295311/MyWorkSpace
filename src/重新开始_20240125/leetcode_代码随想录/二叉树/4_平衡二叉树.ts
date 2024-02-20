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

function isBalanced(root: TreeNode | null): boolean {
  //递归遍历 每次遍历都检查左右节点的高度就行了 遍历到最深处
  function dfs(curr: TreeNode | null) {
    if (curr == null) {
      return 0;
    }
    const leftDepth = dfs(curr.left);
    const rightDepth = dfs(curr.right);
    if (
      leftDepth !== false &&
      rightDepth !== false &&
      Math.abs(leftDepth - rightDepth) <= 1
    ) {
      return 1 + Math.max(leftDepth, rightDepth);
    } else {
      return false;
    }
  }

  return dfs(root) === false ? false : true;
}
