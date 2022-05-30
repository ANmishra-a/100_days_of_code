function cakes(recipe, available) {
  let recipeKeyArr = Object.keys(recipe);
  let availableKeyArr = Object.keys(available); // gives an array with all key name of an object
  let array = [];
  for (let i = 0; i < recipeKeyArr.length; i++) {
    if (!availableKeyArr.includes(recipeKeyArr[i])) {
      return 0;
    } else {
      array.push(
        Math.floor(available[recipeKeyArr[i]] / recipe[recipeKeyArr[i]])
      );
    }
  }
  return Math.min(...array);
}
let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

// console.log(recipe.eggs); //acessing a value in object using .key/
// console.log(Object.keys(available));
console.log(Object.getOwnPropertyNames(recipe)); // gives an array with all key name of an object
console.log(cakes(recipe, available));
// function showProps(obj, objName) {
//   let result = "";
//   for (let i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += `${objName}.${i} = ${obj[i]}\n`;
//     }
//   }
//   console.log(result);
// }
// showProps(recipe, "recipe");
// console.log(entries, entries2);
// class ObjectCompair {
//   constructor(object1, object2) {
//     for (const item of Object.entries(object1)) {
//       this.array1 = item;
//     }
//     for (const item of Object.entries(object2)) {
//       this.array2 = item;
//     }
//   }
//   console() {
//     console.log(this.array1, this.array2);
//   }
// }
// const myObj = new ObjectCompair();
// myObj(recipe, available);
