// zmiany dla pr

const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const inputC = document.getElementById('c');
const btn = document.querySelector("button")


btn.addEventListener("click", function () {
    var a = inputA.value;
    var b = inputB.value;
    var c = inputC.value;
    var discriminant = Math.sqrt(b * b - 4 * a * c);
    if (discriminant < 0) {
        console.log("cant");
    }
    else {
        console.log(discriminant);
        var x1 = (-b + discriminant) / (2 * a);
        var x2 = (-b - discriminant) / (2 * a);
        document.getElementById("answer1").innerHTML = "x<sub>1</sub> = " + x1;
        document.getElementById("answer2").innerHTML = 'x<sub>2</sub> = ' + x2;
    }
})



