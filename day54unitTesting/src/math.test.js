// import { test, expect } from "vitest";
// import { add } from "./math";

// test("should add all the  numbers given in an array", () => {
//   // Arrange
//   const numbers = [1, 2, 3, 4, 5];

//   //Act
//   const result = add(numbers);

//   // Assert
//   const expectedResult = numbers.reduce(
//     (previous, current) => previous + current,
//     0
//   );
//   expect(result).toBe(expectedResult);
// });

// test("should return NaN if the given item in array are not numbers", () => {
//   // Arrange
//   const numbers = ["anuj", 4];

//   //Act
//   const result = add(numbers);

//   // Assert
//   const expectedResult = numbers.reduce(
//     (previous, current) => previous + current,
//     0
//   );
//   expect(result).toBeNaN();
// });

// test("should return sum if the given item in array are string form of number numbers", () => {
//   // Arrange
//   const numbers = ["3", "4"];

//   //Act
//   const result = add(numbers);

//   // Assert
//   const expectedResult = numbers.reduce(
//     (previous, current) => +previous + +current,
//     0
//   );
//   expect(result).toBe(expectedResult);
// });
// test("should return 0 if the given array is empty", () => {
//   // Arrange
//   const numbers = [];

//   //Act
//   const result = add(numbers);

//   // Assert
//   const expectedResult = numbers.reduce(
//     (previous, current) => previous + current,
//     0
//   );
//   expect(result).toBe(expectedResult);
// });

// test("should throw an error if no number is given", () => {
//   // Arrange

//   //Act

//   // Assert
//   const resultFunction = () => {
//     add();
//   };
//   expect(resultFunction).toThrow();
// });
// test("should throw an error if no array but numbers is given", () => {
//   // Arrange
//   const num1 = 1;
//   const num2 = 2;

//   //Act
//   const resultFun = () => {
//     add(num1, num2);
//   };
//   // Assert
//   expect(resultFun).toThrow();
// });
