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
  //找最近公共祖先，脑子里想到的一定是【自底向上】，也就是后序遍历
  //递归终止条件
  if (root == null) {
    return null;
  }

  const left = lowestCommonAncestor(root.left, p, q); //左
  const right = lowestCommonAncestor(root.right, p, q); //右
  //1.如果左右都不是，看自己的val和p，q
  if (left == null && right == null) {
    return [p.val, q.val].includes(root.val) ? root : null;
  }
  //2.如果左和右有一个是，如果自己val和p,q相等，就返回本身，如果不相等，就返回有值的那一个
  if (left == null || right == null) {
    return [p.val, q.val].includes(root.val) ? root : left || right;
  }
  //3.如果左右都是
  return root;
}
