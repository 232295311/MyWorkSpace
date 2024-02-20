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

function findBottomLeftValue(root: TreeNode | null): number {
  //请找出该二叉树的 最底层 最左边 节点的值。
  //1.可以用层序遍历，每层都只记录最左边的一个值，最终结果就会是最底层最左边的值。
  //2.可以用DFS，每次到达一个新的深度，就记录下第一次到达时遇见的节点的值。以前序遍历的顺序。
  function dfs(curr: TreeNode | null, depth: number) {
    //递归终止条件
    if (curr == null) {
      return;
    }
    //中
    if (depth > maxDepth) {
      //当前深度比所有记录的深度要大
      maxDepth = depth;
      res = curr.val;
    }

    dfs(curr.left, depth + 1); //左
    dfs(curr?.right, depth + 1); //右
  }
  let res = 0;
  let maxDepth = 0;
  dfs(root, 1);
  return res;
}
