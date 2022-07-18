// this .this key word in js
"use strict";
let userName = "Atul";
function getUserName() {
  return `${this.userName} is smart`;
}
const obj = {
  userName: "Anuj",
  age: 24,
  messageNormal() {
    return `${this.userName} is ${this.age} years old`;
  },
  messageArrow1: () => {
    return this.age + Number(number);
  },
};

// const message = obj.messageNormal();
// console.log(obj.messageNormal().bind(userName));
// console.log(getUserName().bind(obj.userName));
// bind creats a totally new function  and calls the this

console.log(obj.messageNormal.bind(age, 23));
