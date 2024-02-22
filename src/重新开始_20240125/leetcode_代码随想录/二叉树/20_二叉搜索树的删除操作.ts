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
    return null;
  }
  //删除操作 删掉要删除的节点，
  //   1. 如果只有左或者只有右，用存在的节点替换掉被删除的。
  //   2、如果既有左也有右，将它的右子树替换上来并且将它左子树全部转移到右子树的最左节点的左子树上
  //   或者用右子树的最左节点(左子树的最右节点)来替换被删除的节点
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  //此时找到要删除的节点了
  if (root.left && root.right) {
    //如果既有左也有右
    let curr = root.right;
    while (curr.left != null) {
      curr = curr.left;
    }
    //此时curr指向右子树的最左节点
    root.val = curr.val; //直接置换它的值
    root.right = deleteNode(root.right, curr.val); //然后去右子树里删掉这个节点
    return root;
  } else {
    //相当于if (root.right || root.left)
    //有左就返回左 有右就返回右 没左没右返回null
    return root.left || root.right;
  }
}
