function returnValueExcercise() {
    console.log('Function is running');
    return;
}

function returnValueExcercise2(number) {
    if (number === 1) {
        return '1';  // The return key word stop the funciton, exit from function.
    }               // Don't use 'else'
    return 'Not 1'; // You must use another return, if 'if' are used.
}

returnValueExcercise();
console.log(returnValueExcercise());
console.log(returnValueExcercise2(2));
console.log(returnValueExcercise);     // I don't call the function!! Only write to the console the funcition
