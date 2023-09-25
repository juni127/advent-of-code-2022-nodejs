const fs = require('fs');

fs.readFile('../input', 'utf8', (err, data) => {
    if(err) throw err;
    solution(data);
})

const solution = input => {
    const characters = input.split('');

    let i = 13;
    while (i < characters.length) {
        let accI = 0;
        for(let a = i; a > i-13; a--){
            for(let b = a-1; b > i-14; b--){
                if(characters[a] == characters[b]){
                    accI = (14-(i-a))-(a-b);
                    break;
                }
            }
            if(accI != 0)break;
        }
        if(!accI)break;
        i+=accI;
    }

    console.log(i+1);
}