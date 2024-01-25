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

function rightSideView(root: TreeNode | null): number[] {
  //因为每个节点你都不知道要往右还是往左，
  let res: number[] = [];
  const dfs = (curr: TreeNode | null, depth: number) => {
    //递归终止条件
    if (curr == null) {
      return;
    }
    if (depth === res.length) {
      // 如果当前节点的深度，在res里还没有遍历到
      // 说明当前节点是这个深度第一个遍历到的节点，加入res
      res.push(curr.val);
    }
    depth++;
    dfs(root.right, depth); //先右边
    dfs(root.left, depth);
  };
  return res;
}
