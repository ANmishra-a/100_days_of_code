class MaxHeap {
  // Node  at index i
  //  Left child is at 2*i;
  // Right child is at 2*i + 1;
  constructor() {
    this.heap = [null];
  }
  insert(node) {
    // for inserting an element it takes O(log(n)) time
    this.heap.push(node);
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      while (
        current > 1 &&
        this.heap[current] > this.heap[Math.floor(current / 2)]
      ) {
        [this.heap[current], this.heap[Math.floor(current / 2)]] = [
          this.heap[Math.floor(current / 2)],
          this.heap[current],
        ];
        current = Math.floor(current / 2);
      }
    }
  }
  delete() {
    let max = this.heap[1];
    this.heap[1] = this.heap.pop();
    let i = 1;
    let j = 2 * i;
    while (j < this.heap.length - 1) {
      if (this.heap[j + 1] > this.heap[j]) {
        j = j + 1;
      }
      if (this.heap[i] < this.heap[j]) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        i = j;
        j = 2 * j;
      } else {
        break;
      }
    }
    return max;
  }
  print = function () {
    console.log(`max : ${this.heap}`);
  };
}
let max = new MaxHeap();
max.insert(10);
max.insert(12);
max.insert(2);
max.insert(15);
max.insert(1);
max.insert(12);
max.insert(12);
max.insert(12);
max.print();
console.log(max.delete());
console.log(max.delete());
max.print();
