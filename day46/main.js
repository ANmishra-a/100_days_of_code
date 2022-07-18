// (() => {
//   // new worker
//   let myWorker = new Worker("main-worker.js");

//   // event handler to recieve message from worker
//   myWorker.onmessage = (e) => {
//     document.getElementById("time").innerHTML = `${e.data.time} seconds`;
//   };

//   let average = (numbers) => {
//     // sending message to web worker with an argument
//     myWorker.postMessage(numbers);
//   };

//   average(1000);
// })();
var iterations = 70;
var multiplier = 1000000000;

function calculatePrimes() {
  console.time("calculating...");

  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
        // not prime
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }

  console.timeEnd("calculating...");

  return primes;
}
