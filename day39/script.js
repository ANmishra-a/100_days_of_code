// const number = [99, 44, 0, 2, 1, 5, 63, 87, 283, 4, 6];
// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     let temp = array[i];
//     for (let j = i + 1; j < array[i].length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }
// console.log(selectionSort(number));
//........................Insertion Sort --------------------
// const array = [3, 2, 4, 1, 5, 7, 6, 8, 9];
// const selectionSort = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     let temp = array[i]; //1
//     let red = i - 1; //2
//     while (red >= 0 && array[red] > temp) {
//       array[red + 1] = array[red];
//       red--;
//     }
//     array[red + 1] = temp;
//   }
//   return array;
// };
// console.log(selectionSort(array));
// // [1, 2, 3, 4, 5, 6, 7, 8, 9]
