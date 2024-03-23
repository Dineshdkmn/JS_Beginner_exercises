const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

rl.question('Enter the year: ', (inputYear) => {
  const year = parseInt(inputYear);
  
  if (isNaN(year) || year <= 0) {
    console.log("Please enter a valid positive year.");
    rl.close();
    return;
  }

  const century = centuryFromYear(year);
  console.log(`Century from year ${year} is: ${century}`);
  
  rl.close();
});
