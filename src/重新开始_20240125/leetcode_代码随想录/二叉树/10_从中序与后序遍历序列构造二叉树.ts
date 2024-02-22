/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  //中序遍历 左中右  [9,3,15,20,7]
  //后序遍历 左右中  [9,15,7,20,3]

  if (inorder.length === 0 || postorder.length === 0) {
    //递归终止条件 理论上这两者会同时为空
    return null;
  }

  // 1.取后序遍历的最后一位数字 就是当前根节点。获取他在中序遍历的下标。创造节点
  let num = postorder.pop();
  let index = inorder.findIndex((item) => item === num);
  const node = new TreeNode(num);

  //2.根据下标可以将中序遍历数组一分为二
  const leftInOrder = inorder.slice(0, index);
  const rightInOrder = inorder.slice(index + 1);

  //3.根据新的中序遍历数组长度可以将后序遍历数组一分为二
  const leftPostOrder = postorder.slice(0, leftInOrder.length);
  const rightPostOrder = postorder.slice(leftInOrder.length);

  //4.继续向下递归，分而治之
  node.left = buildTree(leftInOrder, leftPostOrder);
  node.right = buildTree(rightInOrder, rightPostOrder);
  return node;
}
