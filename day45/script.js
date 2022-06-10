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
function errorMessage(input) {
  if (input !== "number") {
    return "Must be a number besides 0";
  } else if (input === "" || input === null || input === undefined) {
    return "Required field";
  }
}
console.log(errorMessage("123"));
// => ''

console.log(errorMessage(""));
// => 'Required field'

console.log(errorMessage("abc"));
// => 'Must be a number besides 0'
