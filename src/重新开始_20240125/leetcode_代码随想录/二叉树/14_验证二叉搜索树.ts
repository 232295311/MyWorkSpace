/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  // 对于每个节点来说，节点的左子树只包含 小于 当前节点的数。
  // 节点的右子树只包含 大于 当前节点的数。
  // 所有左子树和右子树自身必须也是二叉搜索树。
  // 1. 第一种解法：中序遍历得到结果，然后判断是否递增
  // 2. 直接中序遍历，进入到最左的节点，也就是最小的节点，有一个变量记录上一个遍历到的节点的值
  //    这样每次遍历到新节点，都判断是否小于节点就可以 小于就不是递增的了 就不符合需要

  function dfs(curr: TreeNode | null) {
    if (curr == null) {
      return true;
    }
    const left = dfs(curr.left); //左
    if (preNum !== undefined && curr.val < preNum) {
      return false; //中
    }
    preNum = curr.val;
    const right = dfs(curr.right); //右
    return left && right;
  }

  let preNum: undefined | number = undefined;
  return dfs(root);
}
