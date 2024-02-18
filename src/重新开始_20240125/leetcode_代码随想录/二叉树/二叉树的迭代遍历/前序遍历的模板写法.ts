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

function preOrderTraversal(root: TreeNode | null): number[] {
  if (root == null) {
    return [];
  }
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let curr: TreeNode | null = root;
  while (curr != null || stack.length > 0) {
    //将左子树尽可能地往栈里面压 因为要先记录中间节点
    while (curr != null) {
      res.push(curr.val); //1. 中
      stack.push(curr);
      curr = curr.left; //2. 左
    }
    //弹出来一个 让curr指向右子树
    const node = stack.pop()!;
    curr = node.right; //3.右
  }
  return res;
}
