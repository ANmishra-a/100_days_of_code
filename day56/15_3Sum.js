console.log("15_3Sum.js");
/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.*/
// function mergeSort(array) {
//   console.log("start");
//   const ans = mergeSort_helper(array, 0, array.length);
//   return ans;
// }
// function mergeSort_helper(array, start, end) {
//   //leaf node worker in the tree
//   if (start == end) {
//     return array;
//   }
//   // middle node worker in the tree
//   let middle = Math.floor((start + end) / 2);
//   let left = array.slice(0, middle);
//   let right = array.slice(middle);
//   mergeSort_helper(left, start, middle);
//   mergeSort_helper(right, middle + 1, end);

//   // merging the sorted array
//   let i = start;
//   let j = middle + 1;
//   let aux = [];
//   while (i <= middle && j <= end) {
//     if (array[i] <= array[j]) {
//       aux.push(array[i]);
//       i++;
//     } else if (array[i] > array[j]) {
//       aux.push(array[j]);
//       j++;
//     }
//   }
//   // gather phase
//   while (i <= middle) {
//     aux.push(array[i]);
//     i++;
//   }
//   while (j <= end) {
//     aux.push(array[j]);
//     j++;
//   }
//   array.splice(start, end, ...aux);
//   return array;
// }
// console.log(mergeSort_helper([3, 2, 1], 0, 2));
function helper(arr1, arr2) {
  let i = 0;
  let j = 0;
  let aux = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      aux.push(arr1[i]);
      i++;
    } else {
      aux.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    aux.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    aux.push(arr2[j]);
    j++;
  }
  return aux;
}
let arr1 = [1, 4, 7, 9];
let arr2 = [2, 3, 5];
console.log(helper(arr1, arr2));
