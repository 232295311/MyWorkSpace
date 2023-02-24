/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  //根据前序遍历和中序遍历的结果，构建二叉树
  //分而治之
  //前序遍历的第一个点肯定是根节点，那么就可以把中序遍历根据这个根节点的下标分成两部分，一左一右，从而得到左右子树长度
  //从而preorder[i]是根节点，preorder[i+1]是左子树的根节点，preorder[i+1+左子树长度]是右子树的根节点，
  //以此分而治之

  let hash = new Map(); //新建一个hashMap来保存中序遍历结果中i和对应节点的关系
  for (let i = 0; i < inorder.length; i++) {
    hash.set(inorder[i], i); //['节点值4',0],['节点值9'，1]
  }
  return recur(0, 0, inorder.length - 1);

  /**
   * @param rootIndex  先序遍历根节点索引位置
   * @param leftIndex  中序遍历的左边界索引 主要用来结束递归的
   * @param rightIndex 中序遍历的右边界索引 主要用来结束递归的
   */
  function recur(rootIndex, leftIndex, rightIndex) {
    //递归终止条件
    if (leftIndex > rightIndex) {
      return null;
    }

    //递归时进行的操作
    const node = new TreeNode(preorder[rootIndex]); //创建节点
    const inOrderRootIndex = hash.get(preorder[rootIndex]); //根据前序遍历的根节点拿到中序遍历中根节点的索引位置
    node.left = recur(rootIndex + 1, leftIndex, inOrderRootIndex - 1); //对左子树进行递归 传入新的根节点、左边界、右边界位置
    node.right = recur(
      rootIndex + (inOrderRootIndex - leftIndex) + 1, //前序遍历中 root位置+左子树长度+1
      inOrderRootIndex + 1,
      rightIndex
    ); //对右子树递归 传入新的根节点、左边界、右边界位置
    return node;
  }
};
