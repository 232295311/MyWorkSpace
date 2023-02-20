/*
 * @Description:
 * @Author: Tulandbla
 * @GitHubUserName: 232295311@qq.com
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * 前序遍历 根左右
 */
const preOrderRecur = (node) => {
  if (node == null) {
    return;
  }
  console.log(node.val);
  preOrderRecur(node.left);
  preOrderRecur(node.right);
};

/*
 * 前序遍历 根左右
 * 迭代写法
 */
const preOrderIteration = (node) => {
  if (node == null) {
    return;
  }
  //首先我们需要创建一个stack来存放节点.
  let stack = [node];
  let res = [];
  while (stack.length != null) {
    let node = stack.pop();
    if (node == null) {
      continue;
    }
    // 打印根节点
    res.push(node.val);
    // 然后先加入右子树，再加入左子树。
    stack.push(node.right);
    stack.push(node.left);
  }
  return res;
};

/**
 * 前序遍历 根左右
 * 模板解法利用栈和迭代的方式
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let curr = root;
  let res = []; //保存遍历结果
  let stack = [];
  while (curr != null || stack.length > 0) {
    while (curr != null) {
      // 先打印，再把左子树压进栈中
      res.push(curr.val);
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop();
    curr = node.right;
  }
  return res;
};

/*
 * 中序遍历 左根右
 */
const inOrderRecur = (node) => {
  if (node == null) {
    return;
  }
  preOrderRecur(node.left);
  console.log(node.val);
  preOrderRecur(node.right);
};

/*
 * 中序遍历 左根右
 * 迭代写法
 * 模板解法 利用栈和迭代的方式
 */
const inOrderIteration = (node) => {
  if (node == null) {
    return [];
  }
  let stack = []; //同理，需要一个栈，
  let curr = node;
  let res = [];
  while (stack.length != 0 || curr != null) {
    //尽可能地将左子树压进栈中
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    //弹出来一个 先打印再把它的右子树塞进去 这样就是左根右的打印顺序了
    const node = stack.pop();
    res.push(node.val);
    curr = node.right;
  }
  return res;
};

/*
 * 后序遍历 左右根
 */
const postOrderRecur = (node) => {
  if (node == null) {
    return;
  }
  preOrderRecur(node.left);
  preOrderRecur(node.right);
  console.log(node.val);
};

/*
 * 后序遍历 左右根
 * 迭代写法
 * 模板解法 利用栈和迭代的方式
 */

const postOrderIteration = (node) => {
  let stack = [];
  let res = [];
  let curr = root;
  while (curr != null || stack.length > 0) {
    while (curr != null) {
      //尽可能地把右子树压进栈中
      res.push(curr.val); //先打印根
      stack.push(curr);
      curr = curr.right;
    }
    let node = stack.pop();
    curr = node.left; //弹出后指向它的左子节点
  }
  //这样过后，res中保存的顺序就是 根右左
  return res.reverse(); //返回 左右根
};
