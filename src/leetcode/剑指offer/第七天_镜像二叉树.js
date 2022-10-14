/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  //单树递归
  if (root == null) {
    return null;
  }
  const newLeft = mirrorTree(root.left);
  const newRight = mirrorTree(root.right);
  root.left = newRight;
  root.right = newLeft;
  return root;
};
