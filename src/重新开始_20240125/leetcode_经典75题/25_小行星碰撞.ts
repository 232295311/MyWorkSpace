function asteroidCollision(asteroids: number[]): number[] {
  //碰撞一直是发生在数组中最近的两个相反符号元素之间，
  //类似于匹配花括号{{{}}}，
  //所以可以考虑使用栈
  const stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    //如果【栈顶行星向右】且【当前遍历的行星向左】才会发生碰撞
    let willPush = true;
    while (
      willPush &&
      stack.length > 0 &&
      stack.at(-1)! > 0 &&
      asteroids[i] < 0
    ) {
      //如果遇到碰撞了
      const a = stack.at(-1)!;
      const b = Math.abs(asteroids[i]);
      //发生碰撞，
      if (a < b) {
        //a<b代表碰撞完还会有下一次碰撞。如[... ,5,-10]则栈顶行星[5]出栈，while循环继续下一次碰撞
        stack.pop();
      } else if (a > b) {
        //a>b代表碰撞完不会有下一次碰撞了。留下a，停止循环,也不会往数组里添加反方向的行星
        willPush = false;
      } else {
        // a=b，两行星相消。即要栈顶行星出栈，也要不添加反方向行星
        stack.pop();
        willPush = false;
      }
    }
    if (willPush) {
      stack.push(asteroids[i]);
    }
  }

  return stack;
}
