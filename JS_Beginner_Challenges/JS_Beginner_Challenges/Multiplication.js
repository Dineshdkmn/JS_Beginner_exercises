const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

rl.question('Enter the first number: ', (inputNum1) => {
  const num1 = parseFloat(inputNum1);
  rl.question('Enter the second number: ', (inputNum2) => {
    const num2 = parseFloat(inputNum2);
    const result = multiplyNumbers(num1, num2);
    console.log(`The result of multiplication: ${result}`);

    rl.close();
  });
});
