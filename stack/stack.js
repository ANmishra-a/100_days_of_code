export class MinStack {
  constructor() {
    this.stack = [];
    this.minimumStack = [];
    this.minimumElement;
  }
  top() {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
  push(value) {
    if (!value) {
      throw new Error("No value provided");
    } else if (this.stack.length === 0) {
      this.minimumStack.push(value);
      this.minimumElement = value;
    } else if (this.minimumElement > value) {
      this.minimumElement = value;
      this.minimumStack.push(value);
    } else {
      this.minimumStack.push(this.minimumElement);
    }

    this.stack.push(value);
  }
  pop() {
    this.stack.pop();
    this.minimumStack.pop();
    this.minimumElement = this.top();
  }
  getMin() {
    if (this.minimumElement !== undefined) {
      return this.minimumElement;
    } else {
      throw new Error("Stack is empty!");
    }
  }
}
