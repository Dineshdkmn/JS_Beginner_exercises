const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findSmallestInteger(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest; 
}

rl.question('Enter numbers separated by spaces (e.g., 1 2 3 4): ', (input) => {
  const numbers = input.split(' ').map(Number);

  const smallestInteger = findSmallestInteger(numbers);
  if (smallestInteger !== undefined) {
    console.log("The smallest integer in the array is:", smallestInteger);
  } else {
    console.log("Array is empty.");
  }

  rl.close();
});
