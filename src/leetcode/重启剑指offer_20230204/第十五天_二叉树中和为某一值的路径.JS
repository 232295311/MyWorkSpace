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
  let res = [];

  const dfs = (curr, target, path) => {
    //递归终止条件 到了叶子节点
    if (curr == null) {
      return;
    }
    // console.log(curr.val,target)
    if (curr.left == null && curr.right == null) {
      if (target === curr.val) {
        res.push([...path, curr.val]);
      }
      return;
    }
    //递归时进行的操作
    dfs(curr.left, target - curr.val, [...path, curr.val]);
    dfs(curr.right, target - curr.val, [...path, curr.val]);
  };
  dfs(root, target, []);
  return res;
};
