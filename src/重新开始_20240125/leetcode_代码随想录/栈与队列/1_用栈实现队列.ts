class MyQueue {
  private stackIn: number[];
  private stackOut: number[];
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(x: number): void {
    this.stackIn.push(x);
  }

  pop(): number {
    if (this.stackOut.length > 0) {
      return this.stackOut.pop()!;
    }
    while (this.stackIn.length > 0) {
      const num = this.stackIn.pop()!;
      this.stackOut.push(num);
    }
    return this.stackOut.pop()!;
  }

  peek(): number {
    if (this.stackOut.length > 0) {
      return this.stackOut.at(-1)!;
    } else {
      return this.stackIn[0];
    }
  }

  empty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
