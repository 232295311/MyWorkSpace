//https://leetcode.cn/problems/binary-tree-preorder-traversal/solution/tu-jie-er-cha-shu-de-si-chong-bian-li-by-z1m/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  //二叉树的层序遍历
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      continue;
    }
    res.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  return res;
};
