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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  function dfs(curr1, curr2) {
    if (curr1 == null && curr2 == null) {
      return null;
    }
    if (curr1 == null) {
      return curr2;
    }
    if (curr2 == null) {
      return curr1;
    }

    const node = new TreeNode(curr1.val + curr2.val);
    node.left = dfs(curr1.left, curr2.left);
    node.right = dfs(curr1.right, curr2.right);
    return node;
  }
}
