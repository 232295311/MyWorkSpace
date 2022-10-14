/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) {
    return true;
  }
  return recur(root, root);
};
//双树递归问题
const recur = (A, B) => {
  //如果都不存在，返回ture
  if (A == null && B == null) {
    return true;
  }
  //如果有一个不存在，返回false
  if (A == null || B == null) {
    return false;
  }
  //如果都存在，继续下面
  if (A.val !== B.val) {
    return false;
  }
  return A.val === B.val && recur(A.left, B.right) && recur(A.right, B.left);
};
