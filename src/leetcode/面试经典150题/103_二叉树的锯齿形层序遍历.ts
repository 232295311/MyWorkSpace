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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root == null) {
    return [];
  }
  const queue = [root];
  const res: number[][] = [];
  let isOdd: boolean = true;
  while (queue.length > 0) {
    const length = queue.length;
    const tempArr: number[] = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      tempArr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (isOdd === true) {
      res.push(tempArr);
    } else {
      res.push(tempArr.reverse());
    }
    isOdd = !isOdd;
  }
  return res;
}
