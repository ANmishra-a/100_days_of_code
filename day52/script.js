"use strict";
// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100
// var dailyTemperatures = function (temperatures) {
//   //   debugger;
//   let answerArray = [];
//   let length = temperatures.length;
//   let j;
//   for (let i = 0; i < length - 1; i++) {
//     j = i;
//     while (temperatures[j] <= temperatures[i] && j < length) {
//       j++;
//     }
//     answerArray.push(j - i);
//   }

//   let count = 0;
//   for (let i = 0; i < temperatures.length - 1; i++) {
//     let currentPointer = i + 1;
//     if (temperatures[i] >= temperatures[currentPointer]) {
//       count++;
//     }
//     while (
//       temperatures[i] <= temperatures[currentPointer] &&
//       currentPointer < temperatures.length
//     ) {
//       count++;
//       currentPointer++;
//     }
//     currentPointer = i + 1;
//     answerArray.push(count);
//     count = 0;
// debugger;
// if (
//   temperatures[i] <= temperatures[currentPointer + 1] &&
//   currentPointer < temperatures.length
// ) {
//   count++;
//   currentPointer++;
// }
// answerArray.push(count);
// currentPointer == i;
// count = 0;

//   return answerArray;
// };
// let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// console.log(dailyTemperatures(temperatures));
function descendingOrder(n) {
  let newArr = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(newArr);
}
console.log(descendingOrder(0));
