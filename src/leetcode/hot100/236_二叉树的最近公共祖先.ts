/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  //dfs 先序遍历

  const helper = (curr) => {
    if (curr === null) {
      return null;
    }
    if (curr === p) {
      return p;
    }
    if (curr === q) {
      return q;
    }
    let left = helper(curr.left);
    let right = helper(curr.right);
    if (left != null && right != null) {
      return curr;
    } else if (left == null && right == null) {
      return null;
    }
    return left || right;
  };
  return helper(root);
}
