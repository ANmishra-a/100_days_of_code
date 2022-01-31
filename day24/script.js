// let input = prompt("Entre data");
// function reverse (){
// if (input === ""){
//    alert(input);
// }

// reverse (input);
// even or odd numbers
// let input = prompt("number");
// if (input%2 == 0){
//     alert(input + "" + "is an even number");
// }else{
//     alert(input + "" +" is an odd number ");
// }
// console.log(input%2);
// sum of digits numbers
function factorialize(num) {
  if ((num = 0)) {
    return 1;
  } else if ((num = 1)) {
    return 1;
  } else {
    var product;
    for (var i = 1; i <= num; i++) {
      product = i * i + 1;
    }
    return product;
  }
}

console.log(factorialize(8));

// .........................................

// function factorialize(num) {
//     if(num = 0|1){
//       return 1
//     }else{var product = 1;
//       product = product * num;
//       factorialize(num - 1);
//     }return product;
//   }

//   console.log(factorialize(8));

//   .................................
