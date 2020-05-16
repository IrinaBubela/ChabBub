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





































// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function solution(S) {
//     const allSubstrings = getAllSubstrings(S);
//     const balancedSubStrings = allSubstrings.filter(isBalanced);

//     if (balancedSubStrings.length === 0) {
//         return -1;
//     }
//     const min = Math.min.apply(Math, balancedSubStrings.map(function (str) { return str.length; }));
//     return min;

// }


// function isBalanced(S) {

//     const result = S.split('').every(el => {
//         if (el === el.toLowerCase()) {
//             if (!S.split('').includes(el.toUpperCase())) {
//                 return false;
//             } else {
//                 return true;
//             }

//         }
//         else if (el === el.toUpperCase()) {
//             if (!S.split('').includes(el.toLowerCase())) {
//                 return false;
//             } else {
//                 return true;
//             }
//         }
//     })

//     console.log(result);
//     return result;

// }


// function getAllSubstrings(str) {
//     var i, j, result = [];

//     for (i = 0; i < str.length; i++) {
//         for (j = i + 1; j < str.length + 1; j++) {
//             result.push(str.slice(i, j));
//         }
//     }
//     return result;
// }
// console.log(solution('AcZCbaBz'));















// function solution(A) {
//     A.sort((a, b) => a - b);
//     let first = 0, last = A.length - 1;

//     console.log(last);


//     console.log(A);


//     while (first < last) {

//         if (A[first] === -A[last])
//             return A[last];

//         if (A[first] > -A[last])
//             last -= 1;
//         else
//             first += 1;
//     }

//     return 0;
// }

// const A = [-6, 4, -4, 3, -3, 2, 9]

// console.log(solution(A));

