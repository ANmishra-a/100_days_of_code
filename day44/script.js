// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// // const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// // console.log(array.slice(2, 5));
// // // console.log(array.splice(2, 3));
// // // console.log(array);
// // // console.log(array.reverse());
// // // console.log(array.at(5));
// // for (const letter of array) {
// //   console.log(letter);
// // }
// // array.forEach(function (letter) {
// //   if ((letter = 'string')) {
// //     console.log(true);
// //   }
// // });
// // function createVisitor(name, age, ticketId) {
// //   const obj = {};
// //   obj.name = name;
// //   obj.age = age;
// //   obj.ticketId = ticketId;
// //   console.log(obj);
// // }
// // createVisitor('Verena Nardi', 45, 'H32AZ123');

// // function revokeTicket(visitor) {
// //   visitor.ticketId = null;
// //   console.log(visitor);
// // }
// // revokeTicket(visitor);

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // currencies.forEach(function (currency, short, map) {
// //   console.log(`${short} : ${currency} `);
// // });
// // Coding Challenge #1

// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */
// // function checkDogs(dogsJulia, dogsKate) {
// //   const corrected = dogsJulia.slice(1, dogsJulia.length - 1);
// //   const expended = [...corrected, ...dogsKate];
// //   expended.forEach(function (age, i) {
// //     if (age >= 3) {
// //       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
// //     } else {
// //       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
// //     }
// //   });
// //   // console.log(expended);
// // }
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// //..............................................................................................
// // Data Transformation using Map
// // Map can be used to loop over array Map is same as forEach() but it also make a new array based on the original array after applying a callback method
// const converter = 1.5;
// const array = [3, 6, 8, 2, 9, 24];
// const convert = array.map((x) => x * converter);

// // console.log(convert);
// // the map method can have three parameters 1) is the current element 2) the index 3) the entire array
// const arrayDescription = array.map((item, index, array) => {
//   if (item >= 3) {
//     return `the number${item} at  ${index + 1} is grater or equal to 3 `;
//   } else {
//     return `the number${item} at  ${index + 1} is smaller  than 3 `;
//   }
// });
// // console.log(arrayDescription);
// // Data Transformation using Filter

// //the filter function is used to filter all the items in the array that satisfy the test condition  and return a new array containing the results only
// const filtered = array.filter(function (num) {
//   return num > 3; // try to always write a Boolean value
// });
// // console.log(filtered);

// // Data Transformation using Reduce
// // reduce method is used to reduce boils ("reduce") all array elements down to one single value (e.g adding all elements together) and it returns the reduced value , in oue case it's the sum of all the elements
// const total = array.reduce(function (accumulator, item, index, array) {
//   return accumulator + item;
// }, 0);
// // console.log(total);
// const array2 = [200, 450, -400, 3000, -650, -130, 70, 13000];
// //maximum value
// const maximum = array2.reduce(function (accumulator, current) {
//   if (accumulator < current) {
//     accumulator = current;
//   }
//   return accumulator;
// }, array[0]);
// console.log(maximum);
// chaining all the methods

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let arr = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 3 == 0) {
    arr.push(3);
  } else if (array[i] % 5 == 0) {
    arr.push(5);
  } else arr.push(array[i]);
}
console.log(arr);
