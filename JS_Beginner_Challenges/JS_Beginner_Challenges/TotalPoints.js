const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateTotalPoints(wins, draws) {
  return (wins * 3) + draws;
}

rl.question('Enter the number of wins: ', (winsInput) => {
  const wins = parseInt(winsInput);

  rl.question('Enter the number of draws: ', (drawsInput) => {
    const draws = parseInt(drawsInput);

    const totalPoints = calculateTotalPoints(wins, draws);
    console.log("Total points:", totalPoints);

    rl.close();
  });
});
