function squareDigits(num) {
  let array = [];
  let result = [];
  array.push(num.toString());
  let digits = array[0].split("");
  for (let i = 0; i < digits.length; i++) {
    result.push(Number(digits[i]) ** 2);
  }
  return result.join("");
}
squareDigits(3212);
