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

function kthSmallest(root: TreeNode | null, k: number): number {
  //中序遍历 第k个遍历到的元素即可
  //   let count = 0;
  //   let res;
  //   const recur = (curr: TreeNode | null) => {
  //     if (curr == null) {
  //       return;
  //     }
  //     recur(curr.left);
  //     count++;
  //     if (count === k) {
  //       res = curr.val;
  //       return;
  //     }
  //     recur(curr.right);
  //   };
  //   recur(root);
  //   return res;
  // 写一下遍历的写法
  const stack: TreeNode[] = [];
  let curr = root;
  while (stack.length > 0 || curr != null) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop();
    k--;
    if (k == 0) {
      return node.val;
    }
    curr = node.right;
  }
}
