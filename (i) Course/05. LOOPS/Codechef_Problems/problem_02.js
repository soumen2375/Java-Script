// Given an integer N, Calculate and print the number of digits present in N.
let input = prompt("Enter a number: ");
let N = parseInt(input);

let sum = 0;
let mltpl = 1;

if (N == 0) {
    sum = 0;
    mltpl = 0;
} else {
    while (N > 0) {
        let digit = N % 10;
        sum = sum + digit;
        mltpl = mltpl * digit;
        N = Math.floor(N / 10);
    }
}

console.log(sum + " " + mltpl);