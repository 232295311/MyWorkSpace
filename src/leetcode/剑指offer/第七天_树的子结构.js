//https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/solution/yi-pian-wen-zhang-dai-ni-chi-tou-dui-che-uhgs/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  // 若A与B其中一个为空,立即返回false
  if (A == null) {
    return false;
  }
  if (B == null) {
    return false;
  }
  // B为A的子结构有3种情况,满足任意一种即可:
  // 1.B的子结构起点为A的根节点,此时结果为recur(A,B)
  // 2.B的子结构起点隐藏在A的左子树中,而不是直接为A的根节点,此时结果为isSubStructure(A.left, B)
  // 3.B的子结构起点隐藏在A的右子树中,此时结果为isSubStructure(A.right, B)
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
/*
  判断B是否为A的子结构,其中B子结构的起点为A的根节点
  */
var recur = (A, B) => {
  // 若B走完了,说明查找完毕,B为A的子结构
  if (B == null) {
    return true;
  }
  // 若B不为空并且A为空或者A与B的值不相等,直接可以判断B不是A的子结构
  if (A == null) {
    return false;
  }
  if (A.val !== B.val) {
    return false;
  }
  // 当A与B当前节点值相等,若要判断B为A的子结构
  // 还需要判断B的左子树是否为A左子树的子结构 && B的右子树是否为A右子树的子结构
  // 若两者都满足就说明B是A的子结构,并且该子结构以A根节点为起点
  return recur(A.left, B.left) && recur(A.right, B.right);
};
