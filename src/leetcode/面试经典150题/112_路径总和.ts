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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function dfs(currRoot: TreeNode | null, lastSum): boolean {
    //递归终止条件
    if (currRoot == null || lastSum < 0) {
      return false;
    }
    lastSum = lastSum - root.val;
    if (lastSum === 0) {
      return true;
    }
    return dfs(currRoot.left, lastSum) || dfs(currRoot.right, lastSum);
  }
  return dfs(root, targetSum);
}
