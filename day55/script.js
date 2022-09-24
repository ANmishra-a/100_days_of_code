"use strict";
function quicksortLomotos(array) {
  console.log(array);
  const result = helperSort(array, 0, array.length - 1);
  //   console.log(array[array.length - 1]);
  console.log(result);
}
function helperSort(array, start, end) {
  // work of a leaf worker
  if (start == end) {
    return array[start];
  }
  // work of an random manager
  let pivot = array[start];
  let smaller = start;
  for (let i = start + 1; i < end; i++) {
    if (array[i] > pivot) {
      smaller++; //swap
      [array[smaller], array[i]] = [array[i], array[smaller]];
    }
  }
  [array[start], array[smaller]] = [array[smaller], array[start]];
  //   console.log(array[start], array[smaller], array[smaller - 1], array[end]);
  //   helperSort(array, start, smaller - 1);
  //   helperSort(array, smaller, end);
  return array;
}
console.log(quicksortLomotos([3, 2, 6, 5, 4, 1]));
