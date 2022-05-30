const mergeSort = function (array) {
  let length = array.length;
  let start = 0;
  let end = array.length - 1;
  const call = sort(array, start, end);
  return call;
};
function sort(array, start, end) {
  // check if start and end are equal i.e leaf worker threads
  //   debugger;
  if (start === end) {
    return array;
  }
  // internal node worker threads
  let middle = Math.floor((start + end) / 2);
  sort(array, start, middle);
  sort(array, middle + 1, end);
  // merge the returned values
  let i, j;
  i = start;
  j = middle + 1;
  let auxArray = [];
  while (i <= middle && j <= end) {
    if (array[i] <= array[j]) {
      auxArray.push(array[i]);
      i++;
    } else if (array[i] >= array[j]) {
      auxArray.push(array[j]);
      j++;
    }
    // Gather phase i.e. if one array's item still exists even after merge phase
    while (i <= middle) {
      auxArray.push(array[i]);
      i++;
    }
    while (j <= end) {
      auxArray.push(array[j]);
      j++;
    }
  }
  return auxArray;
}
console.log(mergeSort([1, 4, 5, 7, 9]));
