const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "Arrays must have the same length.";
  }

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}

rl.question('Enter numbers separated by spaces for array 1: ', (input1) => {
  const array1 = input1.trim().split(' ').map(Number);

  rl.question('Enter numbers separated by spaces for array 2: ', (input2) => {
    const array2 = input2.trim().split(' ').map(Number);

    const result = addArrays(array1, array2);
    console.log("Result of array addition:", result);

    rl.close();
  });
});
