const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function stringToArray(str) {
  return str.split('');
}
rl.question('Enter a string: ', (inputString) => {
  const originalString = inputString.trim();

  const charArray = stringToArray(originalString);
  console.log("Original string:", originalString);
  console.log("Array of characters:", charArray);

  rl.close();
});
