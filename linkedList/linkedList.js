// class MyLinkedList {
//   constructor() {
//     this.head = {
//       value: null,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 0;
//   }

//   addAtTail(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   addAtHead(value) {
//     if (this.head.value === null) {
//       this.head.value = value;
//       this.length++;
//     } else {
//       const newNode = {
//         value: value,
//         next: null,
//       };
//       newNode.next = this.head;
//       this.head = newNode;
//       this.length++;
//     }
//   }
//   get(index) {
//     if (index > this.length) {
//       return -1;
//     } else {
//       let count = 0;
//       let currentNode = this.head;
//       while (count !== index) {
//         if (index > this.length) {
//           return -1;
//         }
//         count++;
//         currentNode = currentNode.next;
//       }
//       return currentNode.value;
//     }
//   }
//   addAtIndex(index, value) {
//     const newNode = { value: value, next: null };
//     let currentNode = this.head;
//     let count = 0;
//     while (count !== index - 1) {
//       currentNode = currentNode.next;
//       count++;
//     }
//     newNode.next = currentNode.next;
//     currentNode.next = newNode;
//     this.length++;
//   }
//   deleteAtIndex(index) {
//     let count = 0;
//     let currentNode = this.head;
//     let afterNode;
//     let previousNode;
//     while (count !== index) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//       count++;
//     }
//     if (this.length <= 1) {
//       this.head.value = null;
//       this.head = this.head.next;
//     } else {
//       afterNode = currentNode.next;
//       previousNode.next = afterNode;
//       currentNode.next = null;
//     }
//     this.length--;
//   }

//   print(par = null) {
//     let str = "";
//     let currentNode = this.head;
//     while (currentNode) {
//       str += `${currentNode.value} -->`;
//       currentNode = currentNode.next;
//     }
//     console.log(str + par);
//   }
// }

//  Your MyLinkedList object will be instantiated and called as such:
// let myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(2);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtTail(4);

// console.log(myLinkedList.length);
// myLinkedList.addAtIndex(0, 5);
// console.log(myLinkedList.get(1));
// myLinkedList.deleteAtIndex(1);
// console.log(myLinkedList.get(1));

// ...................................
// myLinkedList.addAtHead(7);
// myLinkedList.addAtHead(2);
// myLinkedList.addAtHead(1);
// myLinkedList.addAtIndex(3, 0);
// myLinkedList.deleteAtIndex(2);
// myLinkedList.addAtHead(6);
// myLinkedList.addAtTail(4);
// console.log(myLinkedList.get(4));
// myLinkedList.addAtHead(4);
// myLinkedList.addAtIndex(5, 0);
// myLinkedList.addAtHead(6);

// myLinkedList.print();

//  var param_1 = obj.get(index)
//  obj.addAtHead(val)
//   obj.addAtIndex(index,val)
//  obj.deleteAtIndex(index)
let result = new Set();
var letterCasePermutation = function (s) {
  helper(s, 0, "");
  return result.keys;
};

function helper(gstring, i, pResult) {
  debugger;
  // for leaf node
  if (i === gstring.length) {
    result.add(pResult);
    return;
  } else {
    // for a middle node
    if (Number(gstring[i]) !== NaN) {
      helper(gstring, i + 1, pResult + gstring[i].toLowerCase());
      helper(gstring, i + 1, pResult + gstring[i].toUpperCase());
    } else {
      helper(gstring, i + 1, pResult + gstring[i]);
    }
  }
}

console.log(letterCasePermutation("a1b2"));
