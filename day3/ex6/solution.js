const fs = require('fs');

fs.readFile('../input', 'utf8', (err, data) => {
    if(err) throw err;
    solution(data);
})

const solution = input => {
    const rucksacks = input.split('\n');

    const prioritySum = rucksacks.reduce((p, rucksack, i) => {
        if(!((i+1)%3)){
            const [secondRucksack, firstRucksack, previous] = p;
            const firstRucksackList = firstRucksack.split('');
            const secondRucksackList = secondRucksack.split('');
            const thirdRucksackList = rucksack.split('');
            const badge = firstRucksackList.map(i1 => secondRucksackList.find(i2 => i2 == i1) && thirdRucksackList.find(i3 => i3 == i1)).filter(item => item != undefined)[0];
            return [previous + badge.toLowerCase().charCodeAt(0) - 96 + (badge != badge.toLowerCase() ? 26 : 0)]
        }
        return [rucksack, ...p];
    }, [0]);

    console.log(prioritySum[0]);
}