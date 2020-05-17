var readline = require('readline-sync');
let arrOfGivenNumbers = [];


function wholeCycle() {
    let answer = "";
    while (true) {

        answer = readline.question("Are you done with typing ?y/n ");

        if (answer == "y" || answer == "n") {
            if (answer == "y") {
                break;
            }

            let inputNumber = readline.question("Type your number ");
            let checkIfItsNumber = parseFloat(inputNumber);

            if (isNaN(checkIfItsNumber)) {
                console.log("You're allowed to type only numbers");
            } else {
                arrOfGivenNumbers.push(parseFloat(inputNumber));
            }

        } else {
            console.log("Please type only Y or N");
        }
    }
    return numberCalculation(arrOfGivenNumbers);
}



function numberCalculation(arr) {
    if (arr.length > 0) {
        let minValue = Math.min(...arr);
        let maxValue = Math.max(...arr);
        let averageValue = (arr) => {
            let sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum = sum + arr[i]

            }
            return parseFloat((sum / arr.length).toFixed(2));
        }

        return {
            minValue: minValue,
            maxValue: maxValue,
            averageValue: averageValue(arr)
        };
    } else {
        return "You dont have any result because of luck of  input numbers";
    }

}

console.log(wholeCycle());

