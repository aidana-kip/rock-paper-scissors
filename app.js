const readline = require('readline-sync');
const menu = require('./menu');
const rules = require('./rules');
const encryptor = require('./encryptor');
const resultCalculator = require('./result_calculator');
const moves = process.argv.slice(2);

moves.filter((move, index) => {
  let duplicateItems = moves.indexOf(move) != index;
  if (duplicateItems) {
    console.log("No duplicates accepted!");
    process.exit(1);
  }
});

if (moves.length === 0 || moves.length < 3 || moves.length % 2 === 0) {
  console.log("Incorrect parameters!");
  process.exit(1);
}

while (true) {
    const secretKey = encryptor.generateSecretKey();
    menu.printMenu(moves);
    const computerMove = Math.floor(Math.random() * (moves.length - 1 + 1) + 1);
    console.log('HMAC: ' + encryptor.generateHMAC(moves[computerMove - 1], secretKey));

    const userMove = readline.question('Enter your move: ');

    if (userMove.trim() === '?') {
        rules.printRules(moves);
    } else if (userMove === '0') {
        break;
    } else {
        if (isNaN(userMove)) {
            console.log('Invalid move, please try again...');
            continue;
        }

        console.log('Your move: ' + moves[userMove - 1]);
        console.log('Computer move: ' + moves[computerMove - 1]);
        console.log('Result: You ' + resultCalculator.calculateWinner(moves, userMove - 1, computerMove - 1));
        console.log('HMAC key: ' + secretKey);

        break;
    }

}
