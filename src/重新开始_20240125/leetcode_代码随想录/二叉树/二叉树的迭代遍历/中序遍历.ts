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

function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) {
    return [];
  }
  const res: number[] = [];
  const stack: TreeNode[] = [];
  //中序遍历由于要先处理左节点，所以不能像前序遍历一样每次都弹出来一个元素慢慢处理
  let curr: TreeNode | null = root;
  while (curr != null || stack.length > 0) {
    //将左节点尽可能地往栈里面压
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    //弹出来一个 先打印再让curr指向右子树，为了把它右子树也按中序遍历的方式塞进去栈。
    //这样就是左根右的打印顺序了
    const node = stack.pop()!;
    res.push(node.val);
    curr = node.right;
  }
  return res;
}
