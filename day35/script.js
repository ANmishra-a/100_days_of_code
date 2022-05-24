"use strict";
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class StackNew {
//   constructor() {
//     this.bottom = null;
//     this.top = null;
//     this.length = 0;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holder = this.top;
//       this.top = newNode;
//       this.bottom = holder;

//       newNode.next = holder;
//     }

//     this.length++;
//   }
//   peak() {
//     if (this.length == 0) {
//       return null;
//     }
//     return this.top;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top == this.bottom) {
//       this.bottom = null;
//     }
//     const holder = this.top;
//     this.top = this.top.next;
//     this.length--;
//   }
// }
// const myStack = new StackNew();
// myStack.push("anuj");
// myStack.push("mishra");
// myStack.pop();
// myStack.pop();

// console.log(myStack.peak());
// console.log(myStack);
// ..........................Stack using array syntax..........................
// class arrStack {
//   constructor() {
//     this.array = [];
//   }
//   peak() {
//     return this.array[this.array.length - 1];
//   }
//   push(value) {
//     return (this.array[this.array.length] = value);
//   }
//   insert(index, value) {}
//   pop() {
//     this.array.pop();
//     return this;
//   }
// }
// const myArrStack = new arrStack();
// myArrStack.push(12);
// myArrStack.push(12);
// myArrStack.push(12);
// myArrStack.push(13);
// myArrStack.pop();
// myArrStack.pop();

// console.log(myArrStack.peak());
// console.log(myArrStack);
// ..........................Queue using array class..........................
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Queue {
//   constructor() {
//     this.length = 0;
//     this.first = null;
//     this.last = null;
//   }
//   peak() {
//     if (this.length == 0) {
//       return null;
//     }
//     return this.first;
//   }
//   enqueue(value) {
//     const node = new Node(value);
//     if (this.length == 0) {
//       this.first = node;
//       this.last = node;
//     } else {
//       this.last.next = node;
//       this.last = node;
//     }

//     this.length++;
//     return this;
//   }
//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.length--;
//     return this;
//   }
// }
// const queue = new Queue();
// queue.enqueue("first");
// queue.enqueue("second");
// queue.enqueue("last");
// queue.dequeue();
// console.log(queue.peak());
// console.log(queue);
// ..........................Queue using Stack..........................
// class MyQueue {
//   constructor() {
//     this.first = [];
//     this.last = [];
//   }
//   push(item) {
//     const length = this.first.length;
//     for (let i = 0; i < length; i++) {
//       this.last.push(this.first.pop());
//     }
//     this.last.push(item);
//     return this;
//   }
//   pop() {
//     const length = this.last.length;
//     for (let i = 0; i < length; i++) {
//       this.first.push(this.last.pop());
//     }
//     this.first.pop();
//     return this;
//   }
// }
// const queue = new MyQueue();
// queue.push(12);
// queue.push(13);
// queue.push(14);
// queue.push(15);
// queue.push(16);
// queue.push(17);
// queue.pop();

// console.log(queue);
