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

function rob(root: TreeNode | null): number {
  function dfs(curr: TreeNode | null): [number, number] {
    //深度优先遍历
    if (curr == null) {
      return [0, 0]; //dp数组：一个节点有[偷,不偷]两个状态
    }
    const left = dfs(curr.left); //左
    const right = dfs(curr.right); //右
    //情况1：我要偷这个节点,则左右子树不能偷
    const p1 = curr.val + left[1] + right[1];
    //情况2：我不偷这个节点,则左右子树能偷，但不一定偷，有可能不偷更好。
    const p2 = Math.max(...left) + Math.max(...right);
    return [p1, p2];
  }
  return Math.max(...dfs(root));
}
