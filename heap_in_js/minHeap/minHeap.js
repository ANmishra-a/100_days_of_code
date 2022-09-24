class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(node) {
    this.heap.push(node);

    let current = this.heap.length - 1;
    while (
      current > 0 &&
      this.heap[current] < this.heap[Math.floor(current / 2)]
    ) {
      // swap
      [this.heap[current], this.heap[Math.floor(current / 2)]] = [
        this.heap[Math.floor(current / 2)],
        this.heap[current],
      ];
      current = Math.floor(current / 2);
    }
  }
  print() {
    console.log(`min heap: ${this.heap}`);
  }
}
let min = new MinHeap();
min.insert(10);
min.insert(12);
min.insert(2);
min.insert(15);
min.insert(1);
min.insert(12);
min.insert(12);
min.insert(12);

min.print();
