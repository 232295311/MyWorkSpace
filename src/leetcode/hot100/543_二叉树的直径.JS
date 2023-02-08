/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  //一棵树的最大直径，可能没经过根节点。
  //但一个点的最大直径我们是可以求出来的，就是该节点的左子树最大深度+右子树最大深度
  //所以要求一棵树的最大直径，我们应该对于每个节点都求出他的最大深度之和，然后比较找出其中最大值

  let maxRes = 0;

  //递归函数
  const dfs = (root) => {
    //递归终止条件
    if (root == null) {
      return 0;
    }
    //递归函数中进行的操作
    //1.获取该点左右子树的最大深度
    const leftDepth = dfs(root.left);
    const rightDepth = dfs(root.right);
    //2.两个加起来就是经过该店的最大直径，记录下来，就不用再遍历了
    maxRes = Math.max(maxRes, leftDepth + rightDepth); //比较直径

    return Math.max(leftDepth, rightDepth) + 1; //比较深度
  };

  dfs(root);
  return maxRes;
};
