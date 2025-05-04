// Variable declared inside a function are only accesible within that function
let myAge = () => {
    let age = 21;
    console.log("My age is: " + age);
}

myAge();

console.log(age); //Error: age is not defined