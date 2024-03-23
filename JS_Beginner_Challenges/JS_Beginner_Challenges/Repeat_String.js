const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function repeatString(str, numTimes) {
  let repeatedString = "";
  for (let i = 0; i < numTimes; i++) {
    repeatedString += str;
  }
  return repeatedString;
}

rl.question('Enter a string: ', (inputString) => {
  const originalString = inputString.trim();

  rl.question('Enter the number of times to repeat the string: ', (inputNumTimes) => {
    const numTimes = parseInt(inputNumTimes);

    const repeatedString = repeatString(originalString, numTimes);
    console.log("Original string:", originalString);
    console.log("Repeated string:", repeatedString);

    rl.close();
  });
});
