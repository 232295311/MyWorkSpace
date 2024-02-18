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
  //和用栈的写法一样，我们修改一下前序遍历的顺序，即可使用颠倒数组得到后序遍历的结果
  if (root == null) {
    return [];
  }
  const res: number[] = [];
  const stack = [];
  let curr = root;
  while (stack.length > 0 || curr != null) {
    while (curr != null) {
      //跟前序遍历一样 也是先打印
      res.push(curr.val); //1. 中
      //不断地压入右子树
      curr = curr.right; //2.右
    }
    const node = stack.pop();
    curr = node.left; //3.左
  }
  return res.reverse(); //颠倒得左右中
}
