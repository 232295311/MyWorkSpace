/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 利用前序遍历，递归。
  //递归终止条件
  if (root == null) {
    return;
  }

  //递归时进行的操作
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left == null) {
    //说明在右手边
    return right;
  }
  if (right == null) {
    //说明在左手边
    return left;
  }
  if (root.val === p.val || root.val === q.val) {
    //找到一致的就返回
    return root;
  }
};
