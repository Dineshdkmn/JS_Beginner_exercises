const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function doubleValues(arr) {
  return arr.map(num => num * 2);
}
rl.question('Enter numbers separated by spaces (e.g., 1 2 3 4): ', (input) => {
  const numbers = input.split(' ').map(Number);

  const doubledArray = doubleValues(numbers);
  console.log("Original array:", numbers);
  console.log("Doubled array:", doubledArray);

  rl.close();
});
