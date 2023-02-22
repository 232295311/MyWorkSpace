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
 * @return {boolean}
 */
var isBalanced = function (root) {
  //如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
  //相当于对于每个节点，都得去求他的左右子树的深度，然后做比较，遍历完全部的节点都不出错才没问题

  //尝试用后序遍历+提前剪枝的方法，可以减少遍历的次数，如果对每个节点都进行左右子树的判断的话，很费时间
  const recur = (curr) => {
    //递归终止条件
    if (curr == null) {
      return 0;
    }
    //提前剪枝

    const leftDepth = recur(curr.left);
    if (leftDepth === -1) {
      return -1;
    }
    const rightDepth = recur(curr.right);
    if (rightDepth === -1) {
      return -1;
    }
    return Math.abs(leftDepth - rightDepth) <= 1 ? 1 : -1;
  };
  recur(root);
};
