// function definicion
// 1. function declaration
// 2. function expression

// reuseable code snippet

// function functionName([parameters]){  // parameters not required
//    fucntion body;
// }

function sum(a, b) {
    return a + b;
}

sum(2, 15);  // function invocation
console.log(sum(2, 15));

const x = 10;
const y = 20;
console.log(sum(x, y));      // sum ( 10, 20), a = 10, b = 20
// parameters in variable

function logArray(arr) {
    arr.push('NEW VALUE')
    console.log(arr);
}

logArray([1, 2, 3, 4, 5]);      // this array are writen in console
const numericArray = [1, 2, 3, 4, 5];
logArray(numericArray);


function sum(a, b) {
    console.log(arguments);     // arguments object, not arrary!! this is object.
    return a + b;
}


