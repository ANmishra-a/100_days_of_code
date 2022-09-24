import { describe, test, expect } from "vitest";
import { MinStack } from "./Stack.js";
describe("Stack.js", () => {
  test("should return a the value at position 0 ", () => {
    const minStack = new MinStack();
    minStack.push(1);
    const result = minStack.stack[0];
    expect(result).toEqual(1);
  });
});

describe("check top()", () => {
  test("should return the top most element from the stack ", () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(3);
    minStack.push(4);

    const result = minStack.top();
    expect(result).toEqual(4);
  });
  test("should  returns NULL if the Stack is empty. ", () => {
    const minStack = new MinStack();
    const result = minStack.top();
    expect(result).toBeNull();
  });
});
describe("MinStack.js.push", () => {
  test(" throw error if argument is not provided", () => {
    const minStack = new MinStack();

    expect(() => minStack.push()).toThrowError(/No value provided/);
  });
  test("should push value at the top of stack", () => {
    const minStack = new MinStack();
    minStack.push(12);
    const result = minStack.top();
    expect(result).toEqual(12);
  });
});
describe("MinStack.js.getMin", () => {
  test(" throw error if stack is empty", () => {
    const minStack = new MinStack();

    expect(() => minStack.getMin()).toThrowError(/Stack is empty!/);
  });
  test("should return minimum  value ", () => {
    const minStack = new MinStack();
    minStack.push(12);
    minStack.push(3);
    minStack.push(1);
    const result = minStack.getMin();
    expect(result).toEqual(1);
  });
  test("should return new maximum value after pop ", () => {
    const minStack = new MinStack();
    minStack.push(12);
    minStack.push(0);
    minStack.push(-1);
    minStack.push(13);
    const result1 = minStack.getMax();
    minStack.pop();
    minStack.pop();
    const result2 = minStack.getMax();

    expect(result1).toEqual(-1);
    expect(result2).toEqual(0);
  });
});
describe("Stack.js pop()", () => {
  test("should delete the top element of the stack", () => {
    const minStack = new MinStack();
    minStack.push(1);

    minStack.push(2);
    minStack.pop();

    let result2 = minStack.top();

    expect(result2).toEqual(1);
  });
});
