/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const dfs = (curr, currtTarget) => {
    if (curr == null) {
      return false;
    }
    path.push(curr.val);
    const newTarget = currtTarget - curr.val;
    console.log(path);
    //递归终止条件 1.到叶子结点了且newTarget为0
    //           2.到叶子结点了且newTarget不为0
    if (curr.left == null && curr.right == null && newTarget === 0) {
      res.push([...path]);
    }

    dfs(curr.left, newTarget);
    dfs(curr.right, newTarget);
    path.pop();
  };

  if (root == null) {
    return [];
  }
  const res = [];
  const path = [];
  dfs(root, target);
  return res;
};
