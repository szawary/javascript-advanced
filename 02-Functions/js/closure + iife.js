// variable will be remain in the memory.


function closure() {
    let i = 0;
    return function () {
        i += 1;
        console.log(i);
    }
}

const result = closure();
result();
result();
result();
result();
result();
result();



// immediately call function
(function (p) {
    console.log('logger is running', p);
})('param');