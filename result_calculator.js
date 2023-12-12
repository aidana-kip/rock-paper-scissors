calculateWinner = (moves, userMoveIdx, computerMoveIdx) => {
    const half = Math.floor(moves.length / 2);
    const sign = Math.sign((userMoveIdx - computerMoveIdx + moves.length + half) % moves.length - half);

    return sign == 0 ? 'Draw' : sign < 0 ? 'Lose' : 'Win';
};

exports.calculateWinner = calculateWinner;