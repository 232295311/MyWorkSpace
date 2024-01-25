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

// 中序遍历的基本逻辑是：处理左子树 -> 处理当前节点 -> 处理右子树。
// 用迭代的办法就是分为：
// 1.尽可能地将左子树压入栈
// 2.每次弹出一个栈顶节点
// 3.将弹出的节点作为当前节点，指向它的右节点，重复步骤1和步骤2
// 所以可以将步骤分别写在迭代器的方法中

class BSTIterator {
  stack: TreeNode[];
  constructor(root: TreeNode | null) {
    let curr = root;
    this.stack = [];
    // while (this.stack.length > 0 || curr != null) {
    //把左边尽可能地压入
    while (curr != null) {
      this.stack.push(curr);
      curr = curr.left;
    }
    // }
  }

  next(): number {
    const node = this.stack.pop();
    let curr: TreeNode = null;
    if (node.right != null) {
      curr = node.right;
    }
    while (curr != null) {
      this.stack.push(curr);
      curr = curr.left;
    }
    return node.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
