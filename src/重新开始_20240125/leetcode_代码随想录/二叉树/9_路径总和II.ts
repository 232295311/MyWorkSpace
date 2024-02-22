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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];
  const currPath: number[] = [];
  function recur(curr: TreeNode | null, lastTarget: number) {
    lastTarget = lastTarget - curr.val;
    currPath.push(curr.val);
    console.log(currPath, lastTarget);
    //递归终止条件
    if (curr.left == null && curr.right == null) {
      if (lastTarget === 0) {
        res.push(currPath);
        return;
      }
    }
    if (curr.left) {
      recur(curr.left, lastTarget);
      currPath.pop();
    }
    if (curr.right) {
      recur(curr.right, lastTarget);
      currPath.pop();
    }
  }
  recur(root, targetSum);
  return res;
}
