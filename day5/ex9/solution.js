const fs = require('fs');

fs.readFile('../input', 'utf8', (err, data) => {
    if(err) throw err;
    solution(data);
})

const solution = input => {
    const lines = input.split('\n');
    const stacks = [];
    let procedureStart = 1;

    for(let line of lines){
        procedureStart += 1;
        if(line[1] == 1)break;
        for(x = 1; x < line.length; x+=4)
            if(line.charAt(x) != ' ')
                stacks[(x-1)/4] = [line.charAt(x), ...(stacks[(x-1)/4] || [])];
    }

    for(let command of lines.splice(procedureStart)){
        const [move, from, to] = command.replace('move ', '').replace('from ', ',').replace('to ', ',').split(',');
        for(let x = move; x > 0; x--)
            stacks[to-1].push(stacks[from-1].pop());
    }

    const result = stacks.reduce((p, c) => p.concat(c.pop()), '');
    console.log(result);
}