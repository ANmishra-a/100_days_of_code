import { transformToNumber, generateResultText } from "./numbers";
import { describe, test, expect } from "vitest";

test("should transform to string numbers to type number", () => {
  // arrange
  const number = "4";
  // act
  const result = transformToNumber(number);
  // assert
  expect(result).toBeTypeOf("number");
});
test("should yield NaN if input can not be converted to number", () => {
  const string = "hello";
  const result = transformToNumber(string);
  // assert
  expect(result).toBeNaN();
});
describe("generateResultText(result)"),
  () => {
    test("should return a  string no matter what is  passed to it", () => {
      const val1 = 1;
      const val2 = "invalid";
      const val3 = false;
      const result1 = generateResultText(val1);
      const result2 = generateResultText(val2);
      const result3 = generateResultText(val3);
      expect(result1).toBeTypeOf("string");
      expect(result2).toBeTypeOf("string");
      expect(result3).toBeTypeOf("string");
    });
  };
