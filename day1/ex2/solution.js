const fs = require('fs');

fs.readFile('../input', 'utf8', (err, data) => {
    if(err) throw err;
    solution(data);
})

const solution = input => {
    const sepatetedByElf = input.split('\n\n');
    const elfCaloriesSum = sepatetedByElf.map(elfCaloriesString => {
        const elfCaloriesList =  elfCaloriesString.split('\n')
        return elfCaloriesList.reduce((p, c) => p + parseInt(c || 0), 0);
    });
    const elfCaloriesSumSorted = elfCaloriesSum.sort((a, b) => b - a);
    const topThreeMaxCalories = elfCaloriesSumSorted[0] + elfCaloriesSumSorted[1] + elfCaloriesSumSorted[2];
    console.log(topThreeMaxCalories);
}