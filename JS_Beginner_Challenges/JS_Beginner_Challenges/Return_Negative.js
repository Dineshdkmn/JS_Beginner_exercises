const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function returnNegative(number) {
  if (number < 0) {
    return number;
  } else {
    return -number;
  }
}

rl.question('Enter a number: ', (inputNumber) => {
  const num = parseFloat(inputNumber);

  const negativeValue = returnNegative(num);
  console.log(`Negative value of ${num} is ${negativeValue}`);

  rl.close();
});
