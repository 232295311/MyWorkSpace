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

function getMinimumDifference(root: TreeNode | null): number {
  //中序遍历顺序，前一个一定比当前这个小，即可算出差值，一次中序遍历结束提取出最小的差值即可
  let res: number = Number.MAX_VALUE;
  let preValue: number = Number.MAX_VALUE;
  const recur = (curr: TreeNode | null) => {
    if (curr == null) {
      return;
    }
    curr.left != null && recur(curr.left);
    res = Math.min(Math.abs(curr.val - preValue), res);
    preValue = curr.val;
    curr.right != null && recur(curr.right);
  };
  recur(root);
  return res;
}
