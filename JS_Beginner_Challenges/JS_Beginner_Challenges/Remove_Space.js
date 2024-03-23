const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeSpaces(str) {
  return str.replace(/\s/g, '');
}

rl.question('Enter a string: ', (inputString) => {
  const stringWithSpaces = inputString.trim();

  const stringWithoutSpaces = removeSpaces(stringWithSpaces);
  console.log("String with spaces:", stringWithSpaces);
  console.log("String without spaces:", stringWithoutSpaces);

  rl.close();
});
