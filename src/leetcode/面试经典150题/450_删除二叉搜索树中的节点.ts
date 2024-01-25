/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  //递归终止条件
  if (root == null) {
    return;
  }
  //删除操作 1.如果只有左节点，用左节点代替
  // 2.如果只有右节点，用右节点代替
  // 3.如果左右都有，用左子树的最大节点或者右子树的最小节点代替

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  if (key === root.val) {
    //递归终止条件
    if (root.right === null) {
      return root.left;
    }
    if (root.left === null) {
      return root.right;
    }
    const node = getMin(root.right);
    console.log(node.val);
    root.val = node.val; //交换
    root.right = deleteNode(root.right, node.val); //右子树里删除要被替换的那一个
  }
  return root;
}

function getMin(root): TreeNode {
  if (root.left == null) {
    return root;
  }
  return getMin(root.left);
}
