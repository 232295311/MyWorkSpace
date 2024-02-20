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

function countNodes(root: TreeNode | null): number {
  //如果按 1+countNodes(left)+countNodes(right)的形式，就没用到完全二叉树的性质了
  //对于完全二叉树来说 1.如果一颗树是满完全二叉树，那它的节点数量= 2^深度 - 1
  // 2.一颗满完全二叉树，左子树深度===右子树深度
  //那么问题就变成了怎么求深度呢？
  //答：左节点不断往左 右节点不断往右就是了。因为完全二叉树的节点是尽可能往左排列的

  //递归终止条件
  if (root == null) {
    return 0;
  }
  let curr = root;
  let leftDepth = 1;
  while (curr.left != null) {
    curr = curr.left;
    leftDepth++;
  }
  curr = root;
  let rightDepth = 1;
  while (curr.right != null) {
    curr = curr.right;
    rightDepth++;
  }
  if (leftDepth == rightDepth) {
    return Math.pow(2, leftDepth) - 1;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
}
