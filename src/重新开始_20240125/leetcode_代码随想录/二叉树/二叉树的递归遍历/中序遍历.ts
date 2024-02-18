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

function inorderTraversal(root: TreeNode | null): number[] {
  //先写递归
  function recur(curr: TreeNode | null) {
    //递归终止条件
    if (root == null) {
      return;
    }
    //递归时进行的操作
    recur(curr.left);
    res.push(curr.val);
    recur(curr.right);
  }
  const res: number[] = [];
  recur(root);
  return res;
}
