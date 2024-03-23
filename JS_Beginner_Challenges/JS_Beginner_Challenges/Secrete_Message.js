const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function secret(code) {
    if (code === "Engineer") {
        return "Hello, this is a very confidential message. Do not forward it to anyone. The website we have built has been selected for an award.";
    }
    return "Wrong code";
}

rl.question('Enter the secret code: ', (code) => {
    console.log(secret(code));
    rl.close();
});
