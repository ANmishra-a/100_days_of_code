function main(string) {
  let inputArr = string.split(" ");
  let sum = "";
  for (let i = 0; i < inputArr.length; i++) {
    let unit = inputArr[i] % 10;
    sum += unit;
  }
  if (sum % 10 === 0) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(main("85 25 65 21 84"));
