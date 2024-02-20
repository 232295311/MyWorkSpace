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

function binaryTreePaths(root: TreeNode | null): string[] {
  //二叉树的所有路径
  //递归+回溯
  function dfs(curr: TreeNode | null, path: number[]) {
    path.push(curr.val);
    //递归终止条件
    if (curr.left == null && curr.right == null) {
      res.push(path.join("->"));
      return;
    }
    //类似前序遍历
    if (curr.left != null) {
      dfs(curr.left, path);
      path.pop(); //回溯要和递归放一起
    }
    if (curr.right != null) {
      dfs(curr.right, path);
      path.pop(); //回溯要和递归放一起
    }
  }
  if (root == null) {
    return [];
  }
  const res: string[] = [];
  dfs(root, []);
  return res;
}
