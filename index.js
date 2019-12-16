// zmiany dla pr

const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const inputC = document.getElementById('c');
const btn = document.querySelector("button")


btn.addEventListener("click", function () {
    var inputValueA = inputA.value;
    var inputValueB = inputB.value;
    var inputValueC = inputC.value;
    var discriminant = Math.sqrt(inputValueB * inputValueB - 4 * inputValueA * inputValueC);
    if (discriminant < 0) {
        console.log("cant");
    }
    else {
        console.log(discriminant);
        var x1 = (-inputValueB + discriminant) / (2 * inputValueA);
        var x2 = (-inputValueB - discriminant) / (2 * inputValueA);
        document.getElementById("answer1").innerHTML = "x<sub>1</sub> = " + x1;
        document.getElementById("answer2").innerHTML = 'x<sub>2</sub> = ' + x2;
        // console.log(x1, x2)
    }
})



