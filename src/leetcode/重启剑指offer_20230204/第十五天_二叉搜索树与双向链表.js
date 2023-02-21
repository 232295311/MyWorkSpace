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
  if (root == null) {
    return;
  }
  let pre = null;
  let head = null;

  // 左指针指的当作头头，右指针指的当作尾巴。那肯定是和中序遍历一个顺序
  const dfs = (curr) => {
    //递归终止条件
    if (curr == null) {
      return;
    }
    //递归时进行的操作
    dfs(curr.left);
    if (pre == null) {
      //第一次进来时
      pre = curr;
      head = curr; //用于作返回值
    } else {
      pre.right = curr;
      curr.left = pre;
      pre = curr;
    }
    dfs(curr.right);
  };
  dfs(root);
  //补充尾和头的关系 使之成为循环链表
  pre.right = head;
  head.left = pre;
  return head;
};
