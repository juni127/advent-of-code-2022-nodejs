const fs = require('fs');

fs.readFile('../input', 'utf8', (err, data) => {
    if(err) throw err;
    solution(data);
})

const solution = input => {
    const rounds = input.split('\n');

    const resultMaper = {
        'A': i => ({ // 1
            'X': 3, // lose
            'Y': 1 + 3, // draw
            'Z': 2 + 6,     // win
        }[i]),
        'B': i => ({  // 2
            'X': 1,
            'Y': 2 + 3,
            'Z': 3 + 6,
        }[i]),
        'C': i => ({ // 3
            'X': 2,
            'Y': 3 + 3,
            'Z': 1 + 6,
        }[i]),
    }

    const roundsResultSum = rounds.reduce((p, round) => {
        const roundSplited = round.split(' ');
        return p + resultMaper[roundSplited[0]](roundSplited[1]);
    }, 0);

    console.log(roundsResultSum);
}