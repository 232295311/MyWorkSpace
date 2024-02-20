/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  //再来写一个DFS的
  //每次遍历到一个节点的时候，都让它的左节点 指向 右节点
  //然后左节点往右走
  //右节点往左走
  //直到尽头
  //这样从纵向的角度思考，这一整条的链路就打通了。
  //然后我们再递归左节点的左子树 和 右节点的右子树

  recur(root);
  return root;
  function recur(curr: Node | null) {
    if (curr == null) {
      return;
    }
    let left = curr.left;
    let right = curr.right;
    while (left != null) {
      left.next = right; //左指向右
      left = left.right; // 左节点往右走
      right = right.left; //右节点往左走
    }
    //结束这一片纵深 继续往下递归
    recur(left.left);
    recur(right.right);
  }
}
