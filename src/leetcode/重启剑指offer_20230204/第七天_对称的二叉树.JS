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
  //双树递归吧
  if (root == null) {
    return true;
  }
  return recur(root.left, root.right);
};
const recur = (rootA, rootB) => {
  //递归终止条件
  //1. 如果都为空，说明遍历完了，对称
  //2. 如果有一方是空的说明不对称
  //3. 如果值不相等，说明不对称
  if (rootA == null && rootB == null) {
    return true;
  }
  if (rootA == null || rootB == null) {
    return false;
  }
  if (rootA.val != rootB.val) {
    return false;
  }

  // 递归时进行的操作
  return recur(rootA.left, rootB.right) && recur(rootA.right, rootB.left);
};
