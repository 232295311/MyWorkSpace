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

function isSymmetric(root: TreeNode | null): boolean {
  //再写个迭代的，反正每次就比较两个点
  const queue = [root.left, root.right];
  while (queue.length > 0) {
    // const length = queue.length;
    const left = queue.shift();
    const right = queue.shift();
    if (left == null && right == null) {
      //说明遍历到叶节点了
      //   return true;//要两边都为真才可以true
      continue;
    }
    if (left == null || right == null || left.val !== right.val) {
      return false;
    }
    //此时left.val === right.val 继续遍历
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }
  return true;
}
