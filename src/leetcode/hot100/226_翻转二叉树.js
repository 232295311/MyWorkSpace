/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  //简单的递归就可以了~ 单树递归问题

  //递归终止条件
  if (root == null) {
    return null;
  }
  //递归时进行的操作
  const newLeft = invertTree(root.right);
  const newRight = invertTree(root.left);
  root.left = newLeft;
  root.right = newRight;
  return root;
};
