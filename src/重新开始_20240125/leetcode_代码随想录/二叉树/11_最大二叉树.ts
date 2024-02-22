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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  //单调栈
  //维护一个单调递减的栈，栈底元素就是最大的元素
  //每次遍历到一个新元素，就比较大小，如果比栈顶的还要小，就入栈，
  //如果比栈顶大，就逐个出栈使之找到合适的位置入栈
  //入栈时，栈顶.right = 入栈节点
  //出栈时，入栈节点.left = 出栈节点

  const stack: TreeNode[] = [];
  //   let root: TreeNode | null = null;
  for (let i = 0; i < nums.length; i++) {
    const node = new TreeNode(nums[i]); //即将入栈节点
    while (stack.length > 0) {
      const topNode = stack.at(-1);
      if (topNode.val > node.val) {
        //栈顶比它还大 乖乖入栈
        stack.push(node);
        topNode.right = node;
        break; //跳出while循环
      } else {
        //栈顶没他大 栈顶出栈
        stack.pop();
        node.left = topNode;
        //继续下轮while循环 看看还需不需要出栈
      }
    }
    stack.push(node);
  }
  return stack[0];
}
