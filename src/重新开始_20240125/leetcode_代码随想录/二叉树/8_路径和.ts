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
  //递归终止条件 1.到空节点
  if (root == null) {
    return false;
  }
  //2.到叶节点
  targetSum = targetSum - root.val;
  if (root.left == null && root.right == null) {
    return targetSum === 0;
  }
  //递归时进行的操作  不需要回溯
  const left = hasPathSum(root.left, targetSum);
  const right = hasPathSum(root.right, targetSum);
  return left || right; //只要有任意一条路径能成功即可
}
