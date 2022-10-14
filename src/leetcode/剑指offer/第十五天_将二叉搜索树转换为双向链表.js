/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  const dfs = (curr) => {
    //递归终止条件
    if (curr == null) {
      return;
    }

    dfs(curr.left);
    //左 中 右的遍历顺序，在中间这一层的操作：
    //right指向下一个节点，left指向上一个节点
    if (pre == null) {
      //说明是第一步
      pre = curr;
      head = curr;
    } else {
      pre.right = curr;
      curr.left = pre;
      pre = pre.right;
    }
    dfs(curr.right);
  };
  if (root == null) {
    return null;
  }
  let pre = null;
  let head = null;
  //深度优先遍历 因为是二叉搜索树，且题目要求输入从小到大的链表，所以用中序遍历方便点
  dfs(root);
  pre.right = head;
  head.left = pre;
  return head;
};
