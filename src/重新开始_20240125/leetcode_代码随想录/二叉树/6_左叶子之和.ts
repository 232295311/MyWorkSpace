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

function sumOfLeftLeaves(root: TreeNode | null): number {
  //首先先明确什么是“左叶子”————所有位于父节点左侧的叶节点
  let res = 0;
  if (root == null) {
    return res;
  }
  function dfs(curr: TreeNode | null, isLeft: boolean) {
    //递归终止条件，到叶子节点就结束
    if (curr.left == null && curr.right == null) {
      res += isLeft ? curr.val : 0; //是左叶子就加进去res
      return;
    }
    curr.left && dfs(curr.left, true);
    curr.right && dfs(curr.right, false);
  }
  dfs(root, false);
  return res;
}
