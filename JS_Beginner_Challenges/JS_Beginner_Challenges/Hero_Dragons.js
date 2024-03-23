const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fightDragons(heroPower, dragonStrength) {
  if (heroPower > dragonStrength) {
    return "Hero wins!";
  } else if (heroPower < dragonStrength) {
    return "Dragons win!";
  } else {
    return "It's a draw!";
  }
}
rl.question('Enter the hero power: ', (inputHeroPower) => {
  const heroPower = parseInt(inputHeroPower);

  rl.question('Enter the dragon strength: ', (inputDragonStrength) => {
    const dragonStrength = parseInt(inputDragonStrength);
    const result = fightDragons(heroPower, dragonStrength);
    console.log(result);

    rl.close();
  });
});
