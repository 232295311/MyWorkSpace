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
  // 利用二叉搜索树的性质 如果p，q全部小于curr，就往左边找。如果p,q全部大于curr，就往右边找
  if (root == null) {
    return null;
  }
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val > p.val && root.val > p.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  // 此时要么curr位于[p,q]中间，要么curr == p 或者curr.q  都是返回curr
  return root;
}
