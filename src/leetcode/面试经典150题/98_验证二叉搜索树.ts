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
  //中序遍历得到结果，然后判断是否递增
  //   const res: number[] = [];
  //   const recur = (curr: TreeNode | null) => {
  //     if (curr == null) {
  //       return;
  //     }
  //     recur(curr.left);
  //     res.push(curr.val);
  //     recur(curr.right);
  //   };
  //   recur(root);
  //   for (let i = 0; i < res.length - 1; i++) {
  //     if (res[i] >= res[i + 1]) {
  //       return false;
  //     }
  //   }
  //   return true;
  let res = true;
  let preValue = null;
  const recur = (curr: TreeNode | null) => {
    if (curr == null) {
      return;
    }
    curr.left && recur(curr.left);
    console.log(curr.val, preValue);
    if (preValue == null || curr.val > preValue) {
      preValue = curr.val;
    } else {
      res = false;
    }
    curr.right && recur(curr.right);
  };
  recur(root, null);
  return res;
}
