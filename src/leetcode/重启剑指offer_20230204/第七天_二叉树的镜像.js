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
  //单树递归 dfs
  if (root == null) {
    return null;
  }
  const newRight = mirrorTree(root.left);
  const newLeft = mirrorTree(root.right);
  root.left = newLeft;
  root.right = newRight;
  return root;
};
