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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  //二叉搜索树的插入
  //不用考虑会不会改变原来的树，我们就插在叶子节点上

  if (root == null) {
    //说明找到要插入的地方了 //返回节点
    return new TreeNode(val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val); //往右边找
  } else if (val < root.val) {
    root.left = insertIntoBST(root.left, val); //往左边找
  }
  return root;
}
