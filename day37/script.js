// Write two functions that finds the factorial of any number. One should use recursion, the other should just use a loop
// function findFactorial(number) {
//   let answer = number;
//   for (let i = number - 1; i != 0; i--) {
//     answer = answer * i;
//   }
//   console.log(answer);
// }
// // findFactorial(5);
// function findFactorialR(number) {
//   if (number === 2) {
//     return 2;
//   }
//   return number * findFactorialR(number - 1);
// }
// console.log(findFactorialR(5));
//..............................fibonacci....................................
// 0,1,1,2,3,5,8,13,21,34,......(a fibonacci series)
// function fibonacciIteration(number) {
//   // console.log
//   let arr = [0, 1];
//   for (let i = 2; i < number + 1; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//     console.log(arr);
//   }
//   return arr[number];
// }
// console.log(fibonacciIteration(8));

// function fibonacciIterationRecursive(number) {
//   //code for
//   if (number < 2) {
//     return number;
//   }
//   return (
//     fibonacciIterationRecursive(number - 1) +
//     fibonacciIterationRecursive(number - 2)
//   );
// }

// console.log(fibonacciIterationRecursive(20));
