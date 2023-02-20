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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  //双树递归问题
  //遍历A的每一个节点，判断以该节点为根节点时，B是否是A的子结构
  if (A == null || B == null) {
    return false;
  }
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

const recur = (rootA, rootB) => {
  //辅助递归函数 判断B是否是A的子结构 返回值是boolean
  //递归终止条件：
  //1.B是null，表明递归结束，返回true
  //2.A不是null，返回false
  //3.A和B的val不相等,返回false
  if (rootB == null) {
    return true;
  }
  if (rootA == null) {
    return false;
  }
  if (rootA.val !== rootB.val) {
    return false;
  }

  //递归时进行的操作
  return recur(rootA.left, rootB.left) && recur(rootA.right, rootB.right);
};
