const resultCalculator = require('./result_calculator');

function printRules(moves) {
    let lineSeparator = '+------';
    let tableHeader = '| v PC\\User > | ';
    moves.forEach(element => {
        tableHeader = tableHeader.concat(element + ' | ');
        lineSeparator = lineSeparator.concat('+------');
    });
    console.log(lineSeparator);
    console.log(tableHeader);

    for (let row = 0; row < moves.length; row++) {
        let rowStr = moves[row] + ' | ';

        for (let col = 0; col < moves.length; col++) {
            rowStr = rowStr.concat(resultCalculator.calculateWinner(moves, col, row) + ' | ');
        }

        console.log(lineSeparator);
        console.log(rowStr);
    }
    
    console.log(lineSeparator);
}

exports.printRules = printRules;