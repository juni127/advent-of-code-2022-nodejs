const fs = require('fs');

fs.readFile('../input', 'utf8', (err, data) => {
    if(err) throw err;
    solution(data);
})

const solution = input => {
    const rounds = input.split('\n');

    const resultMaper = {
        'A': i => ({
            'X': 1 + 3,
            'Y': 2 + 6,
            'Z': 3,
        }[i]),
        'B': i => ({
            'X': 1,
            'Y': 2 + 3,
            'Z': 3 + 6,
        }[i]),
        'C': i => ({
            'X': 1 + 6,
            'Y': 2,
            'Z': 3 + 3,
        }[i]),
    }

    const roundsResultSum = rounds.reduce((p, round) => {
        const roundSplited = round.split(' ');
        return p + resultMaper[roundSplited[0]](roundSplited[1]);
    }, 0);

    console.log(roundsResultSum);
}