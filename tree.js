var readline = require('readline-sync');
let givenNumber = readline.question("// Type a number ");


let x = 1;
let y = 1;

let spacesForStar = (givenNumber * 6 - 4) / 2;
const spacesForHash = (givenNumber * 6 - 4) / 2;

while (y < givenNumber) {

    if (spacesForStar > -1) {
        console.log(' '.repeat(spacesForStar) + ' * '.repeat(x) + ' '.repeat(spacesForStar));


        spacesForStar -= 3;
        x += 2;
        y += 1;

    }
}

console.log(' '.repeat(spacesForHash) + ' # '.repeat(1) + ' '.repeat(spacesForHash));

