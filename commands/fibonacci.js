const readline = require("../readline");

const fibonacci = function fibonacci(callback) {
  readline.question("", function (answer) {
    const num = 1000;
    let sequence = new Array(num);
    sequence.fill(0);
    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i < num; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    const interval = 1000;
    const output = sequence.forEach((element, i) => {
      setTimeout(() => console.log(element), interval * i);
    });
    if (answer === "стоп") {
      clearInterval(output);
      readline.close();
      callback();
    }
  });
};

//   let i;
//   let fib = [];

//   fib[0] = 0;
//   fib[1] = 1;
//       for (i = 2; i < 100; i++) {
//       fib[i] = fib[i - 2] + fib[i - 1];
//     //   setInterval(() => {console.log(fib[i])}, 1000);
//  setInterval(() => {console.log(fib[i])}, 1000);
//   }

// //   setInterval(increment, 1000);

//     callback();

module.exports = fibonacci;
