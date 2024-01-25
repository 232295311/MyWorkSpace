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

function maxPathSum(root: TreeNode | null): number {
  // dfs 对二叉树的每个节点都求出：穿过该节点的最大路径和，将这个值作为dfs函数结果返回到上层
  // 对于每个节点来说，有三个选择：1.停在此节点 2.向左节点 3.向右节点
  //计算完每个节点的最大路径和，都要更新下res，因为不一定向上返回后的路径和能变大
  let res = Number.MIN_SAFE_INTEGER;
  const dfs = (curr: TreeNode | null): number => {
    //递归终止条件
    if (curr == null) {
      return 0;
    }
    const leftNum = dfs(curr.left);
    const rightNum = dfs(curr.right);

    const maxPath = curr.val + Math.max(0, leftNum, rightNum); //这里的0非常重要，代表停在该节点
    const crossNodePath = curr.val + leftNum + rightNum;
    res = Math.max(res, crossNodePath);
    if (maxPath < 0) {
      return 0;
    }
    return maxPath;
  };
  dfs(root);
  return res;
}
