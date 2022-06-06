function sumIntervals(intervals) {
  let answerArr = [];
  let j = 0;
  // console.log(intervals.length);

  // debugger;
  for (let i = 0; i < intervals.length; i++) {
    // for (let j = 0; j < intervals.length; j++) {
    let start = intervals[i][j];
    let end = intervals[i][j + 1];

    while (start < end) {
      if (!answerArr.includes(start)) {
        answerArr.push(start);
      }

      start++;
      // }
    }
  }
  return answerArr.length;
}
console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
    [21, 45],
    [16, 14],
    [45, 89],
    [43, 77],
  ])
);
