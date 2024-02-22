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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  //等同于根据中序遍历的序列恢复二叉搜索树
  //那序列的任一个节点都能当成根节点以构成二叉搜索树，但题目要求高度平衡，所以需要选择中间元素作为根节点
  //那根据分而治之的思想，每次递归都将中间节点作为根节点，将左子序列构建左子树，将右子序列构建成右子树
  if (nums.length === 0) {
    return null;
  }
  const mid = Math.floor((0 + nums.length - 1) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));
  return node;
}
