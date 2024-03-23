const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumOfPositive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

rl.question('Enter numbers separated by spaces: ', (input) => {
  const numbers = input.trim().split(' ').map(Number);
  const sum = sumOfPositive(numbers);
  console.log("Sum of positive numbers:", sum);

  rl.close();
});
