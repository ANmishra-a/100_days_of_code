"use strict";
console.log("working...");
function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
}

function quicksort(array) {
  if () {
    return array;
  }
  //   select a random pivot point
  let pivot = Math.floor(Math.random() * array.length);

  // place the pivot point at 0 th position
  if (pivot !== 0) {
    swap(array, pivot, 0);
  }
  console.log(pivot);
  pivot = 0;
  // campier numbers with pivot place the numbers that are smaller to pivot at the left side and to the right other wise
  let Left_pointer = 1;
  let Right_pointer = array.length - 1;
  while (Right_pointer > Left_pointer) {
    if (array[pivot] < array[Left_pointer]) {
      if (array[pivot] > array[Right_pointer]) {
        swap(array, Left_pointer, Right_pointer);
        Left_pointer++;
        Right_pointer--;
      } else Right_pointer--;
    } else {
      Left_pointer++;
    }
  }
  swap(array, pivot, Left_pointer - 1);
  quicksort_helper(array, pivot, Left_pointer);
  quicksort_helper(array, Left_pointer + 1, array.length - 1);
}
let array = [1, 4, 2, 5, 6, 7, 8, 0, 9, 12];
console.log(quicksort(array));
