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

function rob(root: TreeNode | null): number {
  //跟第一题一样，每个节点都有两个状态，偷或不偷，
  //然后考虑该图是二叉树，且最终算和有从底到顶的趋势，所以肯定要先算子节点的收益，最终才能回聚到父节点，
  //所以应该使用后序遍历，dfs

  //用一个Map来记录每个节点偷或不偷的状态，
  //map.get(node)[0]表示不偷的时候的收益
  //map.get(node)[1]表示偷的时候的收益
  const map = new Map();
  const dfs = (node) => {
    //递归终止条件
    if (node == null) {
      return;
    }
    //后序遍历
    dfs(node.left);
    dfs(node.right);
    if (node.left == null && node.right == null) {
      //如果是叶子节点就初始化
      map.set(node, [0, node.val]);
    } else {
      //如果不是叶子节点，就提取它左右子节点的值，
      let leftArr: number[] | [] = map.has(node.left)
        ? Array.from(map.get(node.left))
        : [];
      let rightArr: number[] | [] = map.has(node.right)
        ? Array.from(map.get(node.right))
        : [];

      //根据状态转移方程各自计算出这个节点的偷和不偷状态最大获利值
      let zeroValue =
        (Math.max(leftArr[0], leftArr[1]) || 0) +
        (Math.max(rightArr[0], rightArr[1]) || 0);
      let oneValue = (leftArr[0] || 0) + (rightArr[0] || 0) + node.val;

      map.set(node, [zeroValue, oneValue]);
    }
  };
  dfs(root);
  const rootArr = map.get(root);
  return Math.max(rootArr[0], rootArr[1]);
}
