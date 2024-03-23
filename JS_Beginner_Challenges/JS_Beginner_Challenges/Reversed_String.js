const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(str) {
  return str.split("").reverse().join("");
}

rl.question('Enter a string: ', (inputString) => {
  const originalString = inputString.trim();

  const reversedString = reverseString(originalString);
  console.log("Original string:", originalString);
  console.log("Reversed string:", reversedString);

  rl.close();
});
