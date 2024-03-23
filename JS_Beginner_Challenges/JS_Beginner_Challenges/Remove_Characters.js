const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removeCharacters(str, charsToRemove) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!charsToRemove.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

rl.question('Enter the original string: ', (inputString) => {
  const originalString = inputString.trim();

  rl.question('Enter characters to remove: ', (inputCharsToRemove) => {
    const charsToRemove = inputCharsToRemove.trim();

    const modifiedString = removeCharacters(originalString, charsToRemove);
    console.log("Original string:", originalString);
    console.log("Modified string:", modifiedString);

    rl.close();
  });
});
