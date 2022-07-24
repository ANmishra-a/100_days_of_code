const array = [1, 4, 6, 7, 9, 3, 6, 2, 1];
const number = array.find((x) => x > 7);
// console.log(number);
function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined || tickets[ticketId] === null) {
    return "invalid ticket !!!";
  } else {
    return tickets[ticketId];
  }
}
const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

// ticketStatus(tickets, "RE90VAW7");
// // => 'unknown ticket id'

// ticketStatus(tickets, "0H2AZ123");
// // => 'not sold'

// ticketStatus(tickets, "23LA9T41");
// => 'sold to Verena Nardi'
function gtcVersion(visitor) {
  console.log(visitor.gtc?.version);
}
const visitor1 = {
  name: "Zohar Pekkanen",
  age: 28,
  ticketId: "8DGM3163",
  gtc: {
    signed: true,
    version: "4.2",
  },
};
const visitor2 = {
  name: "Fen Van der Hout",
  age: 70,
  ticketId: "BMYPNZGT",
  gtc: {
    signed: true,
    version: "1.6",
  },
};
const visitor3 = {
  name: "Xuân Jahoda",
  age: 15,
  ticketId: "NZGKELXC",
};
const visitor4 = {
  name: "Micha Tót",
  age: 49,
  ticketId: "3BGCW1G9",
};
const visitor5 = {
  name: "Xuân Jahoda",
  age: 15,
  ticketId: "NZGKELXC",
  gtc: {},
};
const visitor6 = {
  name: "Micha Tót",
  age: 49,
  ticketId: "3BGCW1G9",
  gtc: {
    signed: false,
  },
};
// gtcVersion(visitor1);
// gtcVersion(visitor2);
// gtcVersion(visitor3);
// gtcVersion(visitor4);
// gtcVersion(visitor5);
// gtcVersion(visitor6);


//........................
function twoSum(array1, array2) {
  const arr1 = Number(array1.join(""));
  console.log(arr1 + Number(array2.join("")));
  console.log(sum);
}
// twoSum([1, 2, 3], [0, 7]);
function luckyNumber(value) {
  let array = [];
  let str = String(value);
  for (let a = 0; a < str.length; a++) {
    array.push(str[a]);
  }

  // debugger;
  let i = 0;
  for (let j = array.length - 1; j > i; j--) {
    if (array[j] === array[i]) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}
console.log(luckyNumber(1053501));

// console.log(luckyNumber(4891198));
// function sap(value) {
//   let arr = [];
//   let str = String(value);
//   for (let a = 0; a < str.length; a++) {
//     arr.push(str[a]);
//   }
//   console.log(arr);
// }
// sap(4891198);
