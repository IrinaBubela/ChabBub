const fruits = [
    "apple",
    "banana",
    "orange"
]



function containsOnlyFruits(arr) {
    if (arr.length < 1) {
        return false;
    }
    return arr.every((el) => {
        return fruits.indexOf(el) > -1 ? true : false;
    })
}


console.log(containsOnlyFruits(["apple", "orange", "orange"]));
console.log(containsOnlyFruits(["apple", "orange", "cucumber"]));
console.log(containsOnlyFruits([]));



function containsOnlyFruits(arr) {
    if (arr.length < 1) {
        return false;
    }
    return arr.some((el) => {
        return fruits.indexOf(el) > -1 ? true : false;
    })
}


console.log(containsOnlyFruits(["apple", "orange", "orange"]));
console.log(containsOnlyFruits(["apple", "orange", "cucumber"]));
console.log(containsOnlyFruits([]));


















