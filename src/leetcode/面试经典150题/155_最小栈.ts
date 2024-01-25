interface MinStack {
  stack: number[];
  minStack: number[];
}
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    const minStackTopItem = this.minStack.at(-1);
    if (minStackTopItem === undefined) {
      this.minStack.push(val);
    } else {
      this.minStack.push(Math.min(minStackTopItem, val));
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack.at(-1)!;
  }

  getMin(): number {
    return this.minStack.at(-1)!;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
