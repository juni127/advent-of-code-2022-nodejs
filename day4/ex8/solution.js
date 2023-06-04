const fs = require('fs');

fs.readFile('../input', 'utf8', (err, data) => {
    if(err) throw err;
    solution(data);
})

const contains = (a, b, c, d) => ( 
    (parseInt(a) >= parseInt(c) && parseInt(a) <= parseInt(d)) || (parseInt(b) >= parseInt(c) && parseInt(b) <= parseInt(d)) ||
    (parseInt(c) >= parseInt(a) && parseInt(c) <= parseInt(b)) || (parseInt(d) >= parseInt(a) && parseInt(d) <= parseInt(b))
 ) ? 1 : 0;

const solution = input => {
    const pairs = input.split('\n');

    const overlaps = pairs.reduce((p, c) => {
        const [firstElf, secondElf] = c.split(',');
        const [firstElfStart, firstElfEnd] = firstElf.split('-');
        const [secondElfStart, secondElfEnd] = secondElf.split('-');
        return p + contains(firstElfStart, firstElfEnd, secondElfStart, secondElfEnd);
    }, 0);

    console.log(overlaps);
}