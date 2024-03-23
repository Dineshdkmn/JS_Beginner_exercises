const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0; 
  }
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  let average = sum / arr.length;
  
  return average;
}
rl.question('Enter numbers separated by commas: ', (input) => {

  const numbers = input.split(',').map(Number);
  const average = calculateAverage(numbers);
  console.log("The average of the array is:", average);
  
  rl.close();
});
