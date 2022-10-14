/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  //二叉树的层序遍历
  const queue = [[root]];
  const res = [];
  let isOdder = true; //如果是奇数层就正向打印，如果是偶数层就逆向打印
  while (queue.length > 0) {
    const nodeArr = queue.shift();
    const newNodeArr = [];
    const newResArr = [];
    nodeArr.forEach((item) => {
      if (item !== null) {
        newResArr.push(item.val);
        newNodeArr.push(item.left);
        newNodeArr.push(item.right);
      }
    });
    newResArr.length > 0 && res.push(isOdder ? newResArr : newResArr.reverse());
    newNodeArr.length > 0 && queue.push(newNodeArr);
    isOdder = !isOdder;
  }
  return res;
};
