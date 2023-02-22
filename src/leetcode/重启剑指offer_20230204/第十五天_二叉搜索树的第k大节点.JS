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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  //二叉搜索树的意思是：若它的左子树不为空，则左子树上所有节点的值都小于根节点的值
  // 若它的右子树不为空，则右子树上所有节点的值都大于根节点的值
  // 它的左右子树也分别为二叉搜索树
  //所以二叉搜索树中序遍历的结果是有序的，中序遍历后返回的序列是一个递增序列
  //要取第k大，相当于一个递减序列的第k个数，所以把中序遍历反过来即可得到递减序列,即遍历顺序是 右根左

  //试一下用迭代模板写法代替递归
  //模板迭代写法就是直接创建一个栈，
  let stack = [];
  let count = 0;
  let curr = root;
  while (stack.length > 0 || curr != null) {
    while (curr != null) {
      //如果尽可能的把左节点压进栈中就是中序遍历。这里我们要的遍历顺序是右根左，所以尽可能地将右节点压进栈中
      stack.push(curr);
      curr = curr.right;
    }
    const node = stack.pop(); //每次弹出来一个
    count++;
    if (count === k) {
      return node.val; //找到第k大的数
    }
    curr = node.left ? node.left : null; //如果有左节点，那就让curr去遍历它的左节点
  }
};
