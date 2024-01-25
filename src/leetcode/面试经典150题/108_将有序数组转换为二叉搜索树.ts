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
  function dfs(nums, start, end) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const nodeValue = nums[mid];
    const node = new TreeNode(nodeValue);

    node.left = dfs(nums, start, mid - 1);
    node.right = dfs(nums, mid + 1, end);
    return node;
  }
  return dfs(nums, 0, nums.length - 1);
}
