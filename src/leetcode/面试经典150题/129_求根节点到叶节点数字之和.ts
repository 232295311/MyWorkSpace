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

function sumNumbers(root: TreeNode | null): number {
  const res: number[] = [];
  function dfs(curr, sum) {
    sum = sum * 10 + curr.val;
    //递归终止条件
    if (curr.left == null && curr.right == null) {
      return res.push(sum);
    }
    //dfs
    dfs(curr.left, sum);
    dfs(curr.right, sum);
  }
  dfs(root, 0);
  // console.log(res)
  return res.reduce((pre, curr) => {
    return pre + curr;
  });
}
