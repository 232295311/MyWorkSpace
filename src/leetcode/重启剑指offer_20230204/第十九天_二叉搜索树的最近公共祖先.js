/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  //因为是一颗二叉搜索树，所以p，q的值与节点的值之间的大小关系可以辅助我们看出p，q是否都位于节点的同一边（同一子树）
  //如果都位于同一边子树，那就往那边子树继续遍历下去，直到不位于同一边则找到了。

  //递归时进行的操作

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    //递归终止条件：
    //只要p和q之间有一个等于root.val或者两个一个大于root.val一个小于
    return root;
  }
};
