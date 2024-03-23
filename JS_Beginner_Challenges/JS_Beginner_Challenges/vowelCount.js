const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countVowels(str) {
  str = str.toLowerCase();

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
          vowelCount++;
      }
  }
  return vowelCount;
}

rl.question('Enter a string: ', (inputString) => {
  const vowelsCount = countVowels(inputString);
  console.log("Number of vowels:", vowelsCount);

  rl.close();
});
