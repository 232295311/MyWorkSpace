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

function postorderTraversal(root: TreeNode | null): number[] {
  //前序遍历是中左右
  //后序遍历是左右中 那么我们在前序迭代的基础上调整顺序为 中右左 得到结果后反转即可得到 左右中
  if (root == null) {
    return [];
  }
  const res: number[] = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop()!;
    res.push(node.val); // 1.中
    node.left && stack.push(node.left); //3.左
    node.right && stack.push(node.right); //2.右 后入栈的被先遍历
  }
  return res;
}
