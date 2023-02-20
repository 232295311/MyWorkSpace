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
  //层序打印 考虑用队列实现
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node != null) {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return res;
};
