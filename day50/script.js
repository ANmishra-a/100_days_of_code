// const fib = function (n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// };
// // console.log(fib(7));
// let cached = {};
// const memoized = function (n) {
//   if (cached.hasOwnProperty(n)) {
//     console.log(`from cached`);
//     return cached.n;
//   } else {
//     const result = fib(n);
//     cached[n] = result;
//     return cached[n];
//   }
// };
// memoized(5);
// console.log(memoized["7"]);
// memoized(7);
// memoized(5);
// console.log(memoized["7"]);
// console.log(cached);
// function createIncrement() {
//   debugger;
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(count);
//   }
//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();

// const CreateStack = function () {
//   let items = [];
//   return {
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     },
//   };
// };
// const stack = new CreateStack();
// stack.bind(CreateStack);
// console.log(stack, typeof stack);
// stack.push("anuj");

// console.log(stack.items);

// function getConcatenate(arr) {
//   const copy = arr.slice();
//   return arr.concat(copy);
// }
// console.log(getConcatenate([1, 2, 1]));

// function outer() {
//   let count = 0;
//   function inner() {
//     console.log(count);
//   }
//   count++;
//   return inner;
// }
// console.dir(outer);
// const out = outer();
// console.log(this.name === "anuj", this);
// console.log(out());
// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(count);
//   }
//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }
//   function abc() {
//     count += 10;
//     console.log(`ckk`);
//   }
//   console.log(count);
//   return [increment, log, abc];
// }

// const [increment, log, abc] = createIncrement();
// increment();
// increment();
// increment();
// abc();
// console.dir(abc);
// log();
// increment();
// let nums = [-2, 0, 3, -5, 2, -1];
// var NumArray = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] += nums[i - 1];
//   }

//   return nums;
// };

// NumArray.prototype.sumRange = function (left, right) {
//   return nums[right] - nums[left - 1];
// };
// ["NumArray", "sumRange", "sumRange", "sumRange"][
//   ([[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5])
// ];

// console.log(NumArray.prototype);
// var obj = new NumArray(nums);
// console.log(obj.sumRange(2, 5));
// console.dir(obj);
// const range = function (left, right) {
//   let ans = NumArray(nums);
//   console.log(ans);
//   return ans[right] - ans[left - 1];
// };
// function NumArray(nums) {
//   this.nums = nums;
//   for (let i = 1; i < this.nums.length; i++) {
//     this.nums[i] += this.nums[i - 1];
//   }
// }

// NumArray.prototype.sumRange = function (left, right) {
//   this.ans = this.nums[right] - this.nums[left - 1];
//   return this.ans;
// };
// numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// console.log(numArray.sumRange(2, 5));
// console.log(numArray);
// console.dir(NumArray);
// Object.create() is used to link prototype manually and it will return an empty object so we have to link the this key word
// new automatically link the prototypes together
// let arr = [1, 4, 2, 6, 5, 9, 13, 51];
// console.log(arr.sort());
// let length = arr.length;

// if (length % 2 !== 0) {
//   console.log(arr[(length - 1) / 2]);
// } else {
//   console.log(
//     (arr[Math.floor((length - 1) / 2)] + arr[Math.ceil((length - 1) / 2 + 1)]) /
//       2
//   );
// }
// console.log(arr[(length - 1) / 2]);
// let arr2 = [0, 1];
// console.log(arr2.sort());
// var findMaxAverage = function (nums, k) {
//   let i = 0;
//   let sum = 0;
//   let max = 0;
//   debugger;
//   for (let j = i; j < nums.length; j++) {
//     if (j <= k - 1) {
//       sum += nums[j];
//     } else {
//       i++;
//       j == i;
//     }
//   }
//   sum == sum / k;
//   if (max < sum) {
//     max = sum;
//   }
//   console.log(max);
// };
// let nums = [1, 12, -5, -6, 50, 3];
// let k = 4;
// // findMaxAverage(nums, k);
// var findMaxAverage = function (nums, k) {
//   let sum = 0;
//   let currentAvg = 0;
//   let maxAvg = 0;
//   for (let i = 0; i <= nums.length - 1; i++) {
//     debugger;
//     sum += nums[i];
//     if (i >= k - 1) {
//       currentAvg = sum / k;
//       maxAvg = Math.max(currentAvg, maxAvg);
//       sum -= nums[i - (k - 1)];
//     }
//   }
//   console.log(maxAvg);
// };
// findMaxAverage(nums, k);
var NumArray = function (nums) {
  debugger;
  this.nums = nums;
  for (let i = 1; i <= nums.length - 1; i++) {
    nums[i] += nums[i - 1];
  }
};
NumArray.prototype.sumRange = function (left, right) {
  if ((left = 0)) {
    return nums[right];
  }
  this.ans = this.nums[right] - this.nums[left - 1];
  return this.ans;
};
let nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);
var param_1 = obj.sumRange(1, 5);
console.log(param_1);
