const fs = require('fs');

fs.readFile('../input', 'utf8', (err, data) => {
    if(err) throw err;
    solution(data);
})

const solution = input => {
    const rucksacks = input.split('\n');

    const prioritySum = rucksacks.reduce((p, rucksack) => {
        const rucksackList = rucksack.split('');
        const [firstRucksack, secondRucksack] = [rucksackList.slice(0, rucksackList.length/2), rucksackList.slice(rucksackList.length/2)];

        const wrongItem = firstRucksack.map(item => secondRucksack.find(i => i == item)).filter(item => item != undefined)[0];
        const priority = wrongItem.toLowerCase().charCodeAt(0) - 96;

        return p + priority + (wrongItem != wrongItem.toLowerCase() ? 26 : 0);
    }, 0);

    console.log(prioritySum);
}