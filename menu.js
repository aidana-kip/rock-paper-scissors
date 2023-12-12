function printMenu(moves) {
    console.log('Available moves:');
    for (let i = 1; i <= moves.length; i++) {
        console.log(i + ' - ' + moves[i - 1]);
    }

    console.log('0 - exit');
    console.log('? - help');
}

exports.printMenu = printMenu;