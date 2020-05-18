
const fruits = [
    "apple",
    "banana",
    "orange"
]


function containsOnlyFruits(arr) {
    if (arr.length < 1) {
        return false;
    }
    return arr.some((el) => {
        return fruits.includes(el);
    })
}


function hasAtLeastOneFruit(arr) {
    if (arr.length < 1) {
        return false;
    }
    return arr.every((el) => {
        return fruits.includes(el);
    })
}



console.log(containsOnlyFruits(["apple", "orange", "orange"]));
console.log(containsOnlyFruits(["apple", "orange", "cucumber"]));
console.log(containsOnlyFruits([]));



console.log(hasAtLeastOneFruit(["apple", "orange", "orange"]));
console.log(hasAtLeastOneFruit(["apple", "orange", "cucumber"]));
console.log(hasAtLeastOneFruit([]));



















