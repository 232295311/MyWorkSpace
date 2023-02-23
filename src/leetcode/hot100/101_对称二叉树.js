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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 双树递归问题？
  const recur = (left, right) => {
    //递归终止条件
    if (left == null && right == null) {
      return true;
    }
    if (left == null || right == null) {
      return false;
    }
    if (left.val != right.val) {
      return false;
    }

    //递归时进行的操作
    return recur(left.right, right.left) && recur(left.left, right.right);
  };
  if (root == null) {
    return true;
  }
  return recur(root.left, root.right);
};
