const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
rl.question('Enter a number: ', (inputNumber) => {
  const num = parseInt(inputNumber);

  const result = checkEvenOrOdd(num);
  console.log(`${num} is ${result}`);

  rl.close();
});
