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

function preorderTraversal(root: TreeNode | null): number[] {
  //递归的顺序是根左右 那么我们入栈的顺序是右左根，当出栈时就能实现前序遍历的顺序
  if (root == null) {
    return [];
  }
  const res: number[] = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop()!;
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return res;
}
