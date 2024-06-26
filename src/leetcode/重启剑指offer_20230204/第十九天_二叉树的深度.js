/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  //深度优先遍历即可,注意回溯
  if (root == null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
