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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  //模板解法 利用栈和迭代的方式
  let curr = root;
  let res = []; //保存遍历结果
  let stack = [];
  while (curr != null || stack.length > 0) {
    while (curr != null) {
      res.push(curr.val);
      stack.push(curr);
      curr = curr.right; //把右边的依次入栈
    }
    const node = stack.pop();
    curr = node.left; //弹出后指向它的左子节点
  }
  //这样结束后的顺序就是 中右左
  //想得到后序遍历的结果就是返回倒序就可以了
  return res.reverse();
};
