/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  //层序打印 考虑用队列实现
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const length = queue.length;
    const temp = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (node != null) {
        temp.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    temp.length > 0 && res.push(temp);
  }
  return res;
};
