class MyStack {
  queue1: number[];
  queue2: number[];
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x: number): void {
    //每次入栈都先往queue2注入元素 然后再把queue1的所有元素依次出队注入到queue2中，然后互换queue1和queue2
    this.queue2.push(x); //此时queue2头为栈顶
    while (this.queue1.length > 0) {
      const num = this.queue1.shift()!;
      this.queue2.push(num); //此时queue2头为栈顶，尾为栈底
    }
    const temp = this.queue2;
    this.queue2 = this.queue1;
    this.queue1 = temp; //交换结束后，queue1相当于一个栈，头为栈顶，尾为栈底
  }

  pop(): number {
    return this.queue1.shift()!;
  }

  top(): number {
    return this.queue1[0];
  }

  empty(): boolean {
    return this.queue1.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
