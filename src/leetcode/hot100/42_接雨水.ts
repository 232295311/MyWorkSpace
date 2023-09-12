function trap(height: number[]): number {
  //维护一个栈，栈顶元素永远比栈底元素小的递减栈
  let stack: number[] = []; //栈中存放的是下标，只存高度算不了不相邻的雨水
  let sum = 0;

  for (let i = 1; i < height.length; i++) {
    //栈顶元素相当于这个位置往左边最低的墙。
    //如果栈内有元素 且 height[i]栈顶高度要高，说明递减的左墙遇到了右墙，可以结算了。
    while (stack.length && height[i] > height[stack.at(-1) as number]) {
      let curr = stack.pop() as number; //要结算的下标
      if (stack.length === 0) {
        //如果弹出来栈顶元素后，栈空了，那说明没有左墙兜住水，跳出。
        break;
      }
      const currHeight = height[curr]; //此时要结算的高度

      const leftIndex = stack.at(-1) as number;
      const leftHeight = height[leftIndex]; //此时最近的左墙的高度

      const rainHeight = Math.min(leftHeight, height[i]) - currHeight;
      const res = rainHeight * (i - 1 - leftIndex); //计算雨水面积
      sum += res;
    }
    //如果栈里没有元素，或者height[i]大于等于这个墙，就得入栈更新
    stack.push(i);
  }

  return sum;
}
