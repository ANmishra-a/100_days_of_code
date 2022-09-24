/*LeetCode 1213. Intersection of Three Sorted Arrays

Description
https://leetcode.com/problems/intersection-of-three-sorted-arrays/

Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

Example 1:

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.
Example 2:

Input: arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]
Output: []
Constraints:

1 <= arr1.length, arr2.length, arr3.length <= 1000
1 <= arr1[i], arr2[i], arr3[i] <= 2000 */
console.log("1213. Intersection of Three Sorted Arrays");

function intersection(arr1, arr2, arr3) {
  let i = 0;
  let j = 0;
  let k = 0;
  let intermediateAns = [];
  let final = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      intermediateAns.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }
  for (let i = 0; i < intermediateAns.length; i++) {
    if (intermediateAns[i] === arr3[k]) {
      final.push(intermediateAns[i]);
      k++;
    }
    k++;
  }
  return final;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 7, 9];
let arr3 = [1, 3, 4, 5, 8];
console.log(intersection(arr1, arr2, arr3));
