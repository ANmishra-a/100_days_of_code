"use strict";
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// const removeDuplicates = function (nums) {
//   let newSets = new Set(nums);
//   let expected = [];
//   newSets.forEach(function (number) {
//     expected.push(number);
//   });
//   console.log(expected);

//   //   do {
//   //     expected.push("_");
//   //   } while (expected.length < nums.length);
// };

// // var removeDuplicates = function (nums) {
// //   const expected = new sat(function (numbers) {
// //     while (expected.length < nums.length) {
// //       const newLocal = "_";
// //       expected.push(newLocal);
// //     }
// //     console.log(expected);
// //   });
// // };
// removeDuplicates(nums);
// var twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       if (nums[j] + nums[i] == target) {
//         console.log("correct " + [i, j]);
//       }

//       //   console.log(j);
//     }
//     // console.log(i);
//   }
// };
// console.log(twoSum([2, 5, 5, 11], 10));.
// var containsDuplicate = function (nums) {
//   let array = [];
//   let sat = new Set(nums);
//   sat.forEach(function (nums) {
//     array.push(nums);
//   });
//   if (nums.length > array.length) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(containsDuplicate([1, 2, 3, 1]));
// let array = [1, 2, 3];
// let i = 0;
// const circular = function (arr, num) {
//   if (arr.length < 1 || num !== undefined) {
//     arr.unshift(num);
//     arr.pop();
//     i++;
//     console.log(
//       ` your wardrobe :  ${arr}, your latest purchase: ${num}, at your oldest purchase is at position ${i}`
//     );
//   }
// };

// console.log(circular(array, 6));
// console.log(circular(array, 7));
// console.log(circular(array, 8));
// function solution(roman) {
//   const arrayNum = [];
//   const slice = roman.split("");
//   slice.forEach(function (letter) {
//     arrayNum.push(symbol[letter]);
//   });
//   let j = 1;
//   let sum = 0;
//   for (let i = 0; i <= arrayNum.length; i + 2) {
//     if (arrayNum[j] === undefined) {
//       sum += arrayNum[i];
//     } else if (arrayNum[i] >= arrayNum[j]) {
//       sum += arrayNum[i] + arrayNum[j];
//       j + 2;
//       console.log(sum, j);
//     } else if (arrayNum[i] < arrayNum[j]) {
//       sum += arrayNum[j] - arrayNum[i];
//       j + 2;
//       console.log(sum, j);
//     }
//     console.log(symbol[roman], slice, arrayNum, sum);
//   }
//   return sum;
// }
// const symbol = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// console.log(solution("MMV"));
// class arrays {
//   constructor() {
//     this.length = 0;
//     this.data = [];
//   }
//   retrieve(index) {
//     // console.log(index);
//     return this.data[index];
//   }
//   push(value) {
//     this.data[this.length - 1] = value;
//     this.length++;
//   }
//   pop() {
//     this.data.delete(this.length - 1);
//     this.length--;
//   }
//   unshift(value) {
//     for (let i = this.length; (i = 0); i--) {
//       this.data[i] = this.data[i + 1];
//     }
//     this.data[0] = value;
//   }
// }
// const myArray = new arrays();
// console.log(myArray.push(12));
// console.log(myArray);
// console.log(myArray.retrieve(0));
// console.log(myArray.unshift(8));
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }
//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }
//   set(key, value) {
//     let code = this._hash(key);
//     if (!this.data[code]) {
//       this.data[code] = [];
//     }
//     this.data[code].push([key, value]);
//   }
//   get(key) {
//     let code = this._hash(key);
//     const bucket = this.data[code];
//     if (bucket) {
//       for (let i = 0; i < bucket.length; i++) {
//         if (bucket[i][0] === key) {
//           return bucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }
//   key() {
//     const arr = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         arr.push(this.data[i][0][0]);
//       }
//     }
//     return arr;
//   }
// }
// const myHashTable = new HashTable(10);
// myHashTable.set("grapes", 10000);
// myHashTable.set("gr", 10000);
// myHashTable.set("apes", 10000);
// myHashTable.set("grp", 1000);
// myHashTable.set("pes", 10000);
// console.log(myHashTable.key());
// const firstRepeat = function (arr) {
//   let myMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (!myMap.has(arr[i])) {
//       myMap.set(arr[i], i);
//       console.log(myMap);
//     } else {
//       return arr[i];
//     }
//   }
//   return undefined;
// };

// const firstRepeat = function (arr) {
//   let map = {};
//   for (let i = 0; i < arr.length; i++) {
//     console.log(map);
//     if (map[arr[i]] !== undefined) {
//       return arr[i];
//     } else {
//       map[arr[i]] = i;
//     }
//   }

//   return undefined;
// };

// console.log(firstRepeat([1, 3, 2, 1, 2, 4]));
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // append at the end
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.tail;
  }
  // prepend at the beginning of the linked list
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  // lookup in a linked list
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // Insert at index
  insert(index, value) {
    const node = {
      value: value,
      next: null,
    };
    if (index > this.length) {
      this.append(value);
      this.length++;
    }

    let leader = this.traverseToIndex(index);
    let follower = leader.next;
    node.next = follower;
    leader.next = node;
    this.length++;
  }
  // print transitionValues
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  delete(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index - 1) {
      currentNode = currentNode.next;
      count++;
    }
    let leader = currentNode;
    let follower = currentNode.next.next;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    const Node = {
      value: value,
      next: null,
    };
    let count = 0;
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      count++;
    }
    Node.value = currentNode.value;
    Node = this.head;
  }
}
const myList = new LinkedList(10);
myList.append(5);
myList.append(16);
// myList.insert(4, 333);
myList.prepend(1);
myList.delete(3);
myList.reverse();

console.log(myList.printList());

// class DLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     newNode.prev = this.tail;
//     this.tail.next = newNode;

//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     const head = this.head;
//     newNode.next = head;
//     head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//   }
//   traverseToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     let leader = this.traverseToIndex(index - 1);
//     let follower = leader.next;
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     leader.next = newNode;
//     newNode.prev = leader;
//     newNode.next = follower;
//     follower.prev = newNode;
//     this.length++;
//   }
//   print() {
//     const array = [];
//     let current = this.head;
//     while (current !== null) {
//       array.push(current.value);
//       current = current.next;
//     }
//     console.log(array);
//   }
// }

// const MyList = new DLinkedList(12);
// MyList.prepend(50);
// MyList.prepend(20);
// MyList.prepend(30);
// MyList.prepend(30);
// MyList.append(55);
// MyList.append(5);
// MyList.insert(4, 200);
// // MyList.find(3);
// console.log(MyList);
// MyList.print();
// // console.log(MyList);
