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

function getMinimumDifference(root: TreeNode | null): number {
  //中序遍历顺序，前一个一定比当前这个小，即可算出差值，一次中序遍历结束提取出最小的差值即可
  let res: number = Number.MAX_SAFE_INTEGER;
  let preValue: number = Number.MIN_SAFE_INTEGER; //负数

  //用模板写法解决一下呗？
  const stack: TreeNode[] = [];
  let curr = root;
  while (curr != null || stack.length > 0) {
    while (curr != null) {
      stack.push(curr); //左
      curr = curr.left;
    }
    const node = stack.pop();
    res = Math.min(res, curr.val - preValue);
    preValue = node.val; //中

    curr = node.right; //右
  }
  return res;
}
