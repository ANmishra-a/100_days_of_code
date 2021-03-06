"use strict";
// function bubbleSort(arr) {
//   debugger;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j > i; j--) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// let arr1 = [4, 7, 0, 9, 1];
// console.log(bubbleSort(arr));
// console.log("calculating");
// insertionSort

// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     let red = i - 1;
//     while (temp < arr[red] && red >= 0) {
//       arr[red + 1] = arr[red];
//       red--;
//     }
//     arr[red + 1] = temp;
//   }
//   return arr;
// }
let arr = [12, 9, 7, 0];
// console.log(insertionSort(arr));
function margeSort(arr) {
  let ans = mergeSortHelper(arr, 0, arr.length - 1);
  return ans;
}
function mergeSortHelper(arr, start, end) {
  //work of a leaf manager
  if (end == start) {
    return;
  }
  // work of a internal manager
  const middle = Math.floor((start + end) / 2);
  // delegating work to the subordinate using recursive call
  mergeSortHelper(arr, start, middle);
  mergeSortHelper(arr, middle + 1, end);
  // Margining the two sorted arrays
  let auxArray = [];
  let i = start;
  let j = middle + 1;
  while (i < middle && j < end) {
    if (arr[i] <= arr[j]) {
      auxArray.push(arr[i]);
      i++;
    } else if (arr[i] > arr[j]) {
      auxArray.push(arr[j]);
      j++;
    }
  }
  while (i <= middle) {
    auxArray.push(arr[i]);
    i++;
  }
  while (j <= end) {
    auxArray.push(arr[j]);
    j++;
  }
  return auxArray;
}

console.log(margeSort(arr));
