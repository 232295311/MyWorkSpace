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

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  //先写一个简单的，把递归过程写出来，修剪过程先放着，后面再慢慢优化
  //终止条件
  if (root == null) {
    return null;
  }
  //修剪操作 这里肯定不能直接返回Null
  if (root.val < low) {
    //让父节点的left直接指向它的右子树 但它的右子树也需要修剪
    return trimBST(root.right, low, high); //返回修剪好的右子树
  } else if (root.val > high) {
    //返回修剪好的左子树 右子树全不要了
    return trimBST(root.left, low, high); //返回修剪好的右子树
  } else {
    root.left = trimBST(root.left, low, high); //左
    root.right = trimBST(root.right, low, high); //右
    return root;
  }
}
