/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  //双树递归
  const recur = (curr1, curr2) => {
    //递归终止条件
    if (curr1 == null && curr2 == null) {
      return true;
    }
    if (curr1 == null || curr2 == null || curr1.val !== curr2.val) {
      return false;
    }

    return (
      isSameTree(curr1.left, curr2.left) && isSameTree(curr1.right, curr2.right)
    );
  };
  return recur(p, q);
}
