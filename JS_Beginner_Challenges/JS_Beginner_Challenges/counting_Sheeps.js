const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function countSheep(arr) {
  let sheepCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sheepCount++;
    }
  }
  return sheepCount;
}

rl.question('Enter sheep array elements separated by spaces (e.g., 0 1 0 1): ', (input) => {
  const sheepArray = input.split(' ').map(Number);
  const sheepCount = countSheep(sheepArray);
  console.log("Number of sheep present:", sheepCount);

  rl.close();
});
