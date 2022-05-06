"use strict";

// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.
// const birdsInWeek = function (birdsPerDay, week) {
//   let sum = 0;
//   let start = 1 * week;

//   for (let i = start; (i = start - 7); i--) {
//     sum += birdsPerDay[i];
//   }
//   console.log(sum);
//   // return week 2 k sare birds a sum krna he
// };
// let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
// birdsInWeek(birdsPerDay, 1);
// console.log("anuj");
// ;;;;;;;;;;;;;;;;;;;
// function limesToCut(wedgesNeeded, limes) {
//   let sum = 0;
//   for (let i = 0; sum => wedgesNeeded; i++) {
//     if (limes[i] === "small") {
//       sum += 6;
//     } else if (limes[i] === "medium") {
//       sum += 8;
//     } else {
//       sum += 10;
//     }
//   }
//   console.log(sum);
//   console.log(limes.length);
// let wadges = 0;
// while (wadges <= wedgesNeeded) {
//   for (let i = 0; i <= limes.length; i++) {
//     if (limes[i] === "small") {
//       wadges += 6;
//     } else if (limes[i] === "medium") {
//       wadges += 8;
//     } else {
//       wadges += 10;
//     }
//   }
// }
// console.log(i);
// }
// function limesToCut(wedgesNeeded, limes) {
//   let currentWedges = 0;
//   let i = 0;
//   do {
//     if (limes[i] === "small") {
//       currentWedges += 6;
//       i++;
//     } else if (limes[i] === "medium") {
//       currentWedges += 8;
//       i++;
//     } else {
//       currentWedges += 10;
//       i++;
//     }
//   } while (currentWedges <= wedgesNeeded && i < limes.length);
//   return i;
// }

// limesToCut(80, [
//   "small",
//   "large",
//   "large",
//   "medium",
//   "small",
//   "large",
//   "large",
// ]);
//
// function timeToMixJuice(name) {
//   switch (name) {
//     case "Pure Strawberry Joy":
//       return 0.5;
//       break;
//     case "Energizer":
//     case "Green Garden":
//       return 1.5;
//       break;
//     case "Tropical Island":
//       return 3;
//       break;
//     case "All or Nothing":
//       return 5;
//       break;
//     default:
//       return 2.5;
//   }
// }
// function remainingOrders(timeLeft, orders) {
//   let i = 0;

//   do {
//     timeLeft -= timeToMixJuice(orders[i]);
//     i++;
//   } while (timeLeft > 0);
//   console.log(i);
//   console.log(orders.slice(i));
// }

// remainingOrders(13, [
//   "Pure Strawberry Joy",
//   "Pure Strawberry Joy",
//   "Vitality",
//   "Tropical Island",
//   "All or Nothing",
//   "All or Nothing",
//   "All or Nothing",
//   "Green Garden",
//   "Limetime",
// ]);
// const scoreBoard = {
//   "Amil Pastorius": 99373,
//   "Min-seo Shin": 0,
// };
// function addPlayer(scoreBoard, player, score) {
//   scoreBoard.player = score;
//   console.log(scoreBoard);
// }
// addPlayer(scoreBoard, "Jesse Johnson", 1337);
// scoreBoard.newKey1 = "new value 1";
// scoreBoard["new key 2"] = "new value 2";

// const key = "new key 3";
// scoreBoard[key] = "new value 3";
// console.log(scoreBoard);
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// let letters = /^[A-Za-z]+$/;
// function pigIt(str) {
//   let arr = str.split(" ");
//   let empty = [];

//   for (let i = 0; i < arr.length; i++)
//     if (letters.test(arr[i])) {
//       let newArr = arr[i].slice(1) + arr[i][0] + `ay`;
//       empty.push(newArr);
//     } else if (!letters.test(arr[i])) {
//       empty.push(arr[i]);
//     }
//   console.log(empty.join(" "));
// }

// pigIt("Pig latin is cool !");
let convertArray = [];
let answerArray = [];
const check = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};
// let convertToNumber = function (num) {
//   (num / 16).toFixed(2);
//   // answer.push(`${check[num]}`);
//   // console.log(answer);
// };
// let decimals = function (num) {
//   // console.log((num * 16).toFixed(2));
//   // answer.push(`${check[num]}`);
// };

function rgb(r, g, b) {
  // complete this function
  let array = [];
  array.push(r, g, b);
  for (let i = 0; i < array.length; i++) {
    let number = (array[i] / 16).toFixed(2);
    number = number.toString().split(".");
    convertArray.push(number[0]);
    convertArray.push(Math.round((number[1] / 100) * 16));
  }
  for (let i = 0; i < convertArray.length; i++) {
    answerArray.push(`${check[convertArray[i]]}`);
  }
  console.log(answerArray.join(""));
}

// rgb(255, 255, 255);
rgb(255, 255, 300);
// rgb(0, 0, 0);
// rgb(148, 0, 211)
// ........................................
// let dividend = (r / 16).toFixed(2);
// let string = dividend.toString().split(".");
// console.log(string);
// let converted = convertToNumber(string[0]);
// let decimalPart = decimals(string[1]);
// console.log(converted, answer);
// function split(ab) {
//   console.log(`${a * 10} + ${b * 1}`);
// }
// split(25);
