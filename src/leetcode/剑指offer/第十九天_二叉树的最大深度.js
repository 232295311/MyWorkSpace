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
 * @return {number}
 */
// var maxDepth = function(root) {

//     if(root == null){
//         return 0
//     }
//     return 1+ Math.max(maxDepth(root.left),maxDepth(root.right))
// };
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  //试一下用层序遍历 代替递归
  if (root == null) {
    return 0;
  }
  let currDepth = 0;
  let queue = [root];
  while (queue.length > 0) {
    //相当于每次都弹出queue里面的所有节点
    const temp = [];
    queue.forEach((node) => {
      node && temp.push(node.left);
      node && temp.push(node.right);
    });
    queue = temp;
    currDepth++;
  }
  return currDepth;
};
