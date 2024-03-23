const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

rl.question('Enter a number (n): ', (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num <= 0) {
    console.log("Please enter a valid positive number.");
  } else {
    const result = summation(num);
    console.log("Summation from 1 to", num, "is", result);
  }

  rl.close();
});
