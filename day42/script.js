var maxSequence = function (arr) {
  let i = 0;
  let sum = 0;
  let sumArr = [];
  if (arr.length <= 0) {
    return sum;
  }
  if (arr.length == 1 && arr[0] <= 0) {
    return sum;
  } else if (arr.length >= 2) {
    debugger;
    for (let j = i + 1; j < arr.length; j++) {
      let newSum = arr[i] + arr[j];
      if (newSum > sum && newSum > 0) {
        sum = newSum;
        sumArr.push(newSum);
      } else if (newSum < sum) {
        i++;
        j = i;
      }
    }
    if (sumArr[sumArr.length - 1] < 0) {
      return 0;
    } else {
      return sumArr[sumArr.length - 1];
    }
  }
};
console.log(maxSequence([-50, -8, 6, 8, 18]));
// console.log(maxSequence([-2]));
// console.log(maxSequence([]));
