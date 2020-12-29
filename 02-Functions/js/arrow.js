// Function expression! I can call this const function after declatration. 

const functionExpression = function (param) {      // function name is not necessary
    console.log(arguments);
    console.log('function expression', param);            // if the funciton is in a variable.
}

functionExpression('parameter value');       // whit the name of variable can I call the function. 


const functionExpressionWArrow = (param) => {    // always const, never let
    // Arrow function not creat arguments object!!
    // console.log(arguments);         // it will not work.
    console.log('function expression', param);   // not possible overwrite

}

functionExpressionWArrow('arrow function');


const fnExprReturnValue = function (param) {
    return 'param Value: ' + param;
}

const fnExprReturnValueWArrow = (param) => 'param Value: ' + param;

console.log(fnExprReturnValue(10));
console.log(fnExprReturnValueWArrow(10));