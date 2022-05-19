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
