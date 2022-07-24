// function errorMessage(input) {
//   if (Number(input)) {
//     return "Must be a number besides 0";
//   } else if (input === "" || input === null || input === undefined) {
//     return "Required field";
//   } else {
//     return "";
//   }
// }
// console.log(errorMessage("123"));
// // => ''

// console.log(errorMessage(""));
// // => 'Required field'

// console.log(errorMessage("abc"));
// // => 'Must be a number besides 0'
// function quantities(arr) {
//   let result = { noodles: 0, sauce: 0 };
//   arr.forEach(function (item) {
//     if (item === "noodles") {
//       result.noodles += 50;
//     } else if (item === "sauce") {
//       result.sauce += 0.2;
//     }
//   });
//   return result;
// }

// const fewLayers = ["noodles", "sauce", "noodles"];
// console.log(quantities(fewLayers));
// const friendsList = ["sauce", "noodles", "béchamel", "marjoram"];
// const myList = ["sauce", "noodles", "meat", "tomatoes"];
// function addSecretIngredient(friendsList, myList) {
//   for (let i = 0; i < friendsList.length; i++) {
//     if (!myList.includes(friendsList[i])) {
//       myList.push(friendsList[i]);
//     }
//   }
//   console.log(`"my:" ${myList}, ${friendsList}`);
// }

// addSecretIngredient(friendsList, myList);
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};
function test(obj) {
  for (let item in obj) {
    obj[item] = obj[item] * 2;
  }
  console.log(obj);
}
test(recipe);
