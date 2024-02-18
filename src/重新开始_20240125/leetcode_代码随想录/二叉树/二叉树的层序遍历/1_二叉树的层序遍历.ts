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

function levelOrderBottom(root: TreeNode | null): number[][] {
  //要求自底向上返回
  if (root == null) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
    const length = queue.length;
    const tempArr = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!; //每次都从头部弹出一个节点，直到弹空
      tempArr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(tempArr);
  }
  return res.reverse();
}
