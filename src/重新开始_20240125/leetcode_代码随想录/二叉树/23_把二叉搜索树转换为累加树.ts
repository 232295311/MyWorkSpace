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

function convertBST(root: TreeNode | null): TreeNode | null {
  //右中左的顺序 可以吗
  let sum = 0;
  function dfs(curr: TreeNode | null) {
    if (curr == null) {
      return;
    }
    dfs(curr.right);

    sum += curr.val;
    curr.val = sum;

    dfs(curr.left);
  }
  dfs(root);
  return root;
}
