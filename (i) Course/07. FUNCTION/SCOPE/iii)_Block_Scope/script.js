/*
Block scope in JavaScript refers to the visibility and accessibility of variables declared
within a block of code, denoted by curly braces {}.
like- if, for, while... are block scope.
*/

if(true){
    let x = 10;
    const y = 20;
    var z = 30;
}

console.log(z); //var- is not block scope
console.log(y); //Error