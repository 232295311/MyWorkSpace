/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  //看到二叉搜索树，最好想一下中序遍历。因为是找第k大的节点，所以把中序遍历颠倒一下，使得顺序变成右中左，根据二叉搜索树的特点，第k大的节点即为右中左这样的顺序下遍历的第k个节点

  const dfs = (curr) => {
    //递归终止条件
    if (curr == null) {
      return null;
    }
    dfs(curr.right, k);
    if (k === 1) {
      //递归成功条件
      return curr.val;
    } else {
      k = k - 1;
    }
    dfs(curr.left, k);
  };

  if (root == null) {
    return null;
  }
  return dfs(root);
};
