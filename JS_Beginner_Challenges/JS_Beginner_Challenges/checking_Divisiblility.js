const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function isDivisibleByXAndY(number, x, y) {
  return number % x === 0 && number % y === 0;
}
rl.question('Enter a number: ', (inputNumber) => {
  const number = parseInt(inputNumber);

  rl.question('Enter x: ', (inputX) => {
    const x = parseInt(inputX);

    rl.question('Enter y: ', (inputY) => {
      const y = parseInt(inputY);
      const divisible = isDivisibleByXAndY(number, x, y);
      console.log(`${number} is divisible by ${x} and ${y}:`, divisible);

      rl.close();
    });
  });
});
