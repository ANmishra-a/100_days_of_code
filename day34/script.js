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
class array {}
