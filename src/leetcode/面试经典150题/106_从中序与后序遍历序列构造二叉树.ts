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
  //中序遍历 左根右
  //后序遍历 左右根
  //1.递归终止条件 如果到了叶子节点 即数组为空
  if (postorder.length === 0) {
    return null;
  }

  //2.找到后序遍历数组最后一位的元素
  const pivot = postorder.pop();
  const root = new TreeNode(pivot, null, null);

  //3.根据该元素找到中序遍历数组中需要切割的地方
  const index = inorder.findIndex((value) => {
    return value === pivot;
  });

  // //4.根据Index将中序数组分成左右两个子数组
  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);

  // //5.根据中序数组长度将后序数组分成左右两个数组
  const leftPostOrder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(leftInorder.length);

  //5.继续递归（分而治之）
  root.left = buildTree(leftInorder, leftPostOrder);
  root.right = buildTree(rightInorder, rightPostorder);
  return root;
}
