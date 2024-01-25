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

// 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，
// 其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
// 若最底层为第 h 层，则该层包含 1~ 2h 个节点。

function countNodes(root: TreeNode | null): number {
  //  深度递增，每层满节点分别为1，2，4，8指数倍增，总和即为 1,3,7,15,

  //分别测左右子树的深度，比较，如果不同就继续向下递归比较，总会有满节点的时候，
  let leftDepth = 0;
  let curr = root;
  while (curr != null) {
    leftDepth++;
    curr = curr.left;
  }
  let rightDepth = 0;
  curr = root;
  while (curr != null) {
    rightDepth++;
    curr = curr.right;
  }

  if (rightDepth === leftDepth) {
    return Math.pow(2, leftDepth) - 1; //如果左右子树深度相同，节点数即为2^n-1
  } else {
    //如果不相同，那就继续递归下去
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
}
