// For Loop
for (let i = 0; i < 5; i++) {
    document.getElementById("for_loop").innerHTML += "For Loop <br>";
}

// While Loop
let i = 0;
while (i < 5) {
    document.getElementById("while_loop").innerHTML += "While Loop <br>";
    i++;
}

// Do-While Loop
let j = 0;
do {
    document.getElementById("do_while").innerHTML += "Do-While Loop <br>";
    j++;
} while (j < 5);


// for-of Loop(It's work on Array & Strings)
let subject = "Soumen";

for (let i of subject) {
    document.getElementById("for_of").innerHTML += i + "<br>";
    console.log(i);
}


// for-in Loop(Array & Object)
let student = {
    Name: "soumen maity",
    Age: 21,
    CGPA: 8.3,
}

for (let i in student) { //it's show only 'key' 
    document.getElementById("for_in").innerHTML += i + "<br>";
}
for (let i in student) { //Using variable access 'value'
    document.getElementById("for_in").innerHTML += i + " = " + student[i] + "<br>";
}