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

function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  function recur(curr: TreeNode | null) {
    if (curr == null) {
      return;
    }
    recur(curr.left);
    recur(curr.right);
    res.push(curr.val);
  }
  recur(root);
  return res;
}
