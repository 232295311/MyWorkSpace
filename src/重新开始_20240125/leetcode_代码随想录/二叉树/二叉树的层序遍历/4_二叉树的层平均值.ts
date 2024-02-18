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

function averageOfLevels(root: TreeNode | null): number[] {
  //层序遍历的同时计算每层平均值就行
  const queue = [root];
  const res: number[] = [];
  while (queue.length > 0) {
    const length = queue.length;
    let sum = 0;
    let nodeNum = 0;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      sum += node.val;
      nodeNum++;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(sum / nodeNum);
  }
  return res;
}
