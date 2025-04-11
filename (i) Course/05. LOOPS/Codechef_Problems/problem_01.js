// Factorial of number
let N = 5;
  
// Write your code here
//   let i = 1;
//   let temp = 1;

//   while(i <= N){
//       temp = temp * i;
//       i++;
//   }
//   console.log(temp);

let i = 1;

while(N > 1){
    i = i * N;
    N--;
}
console.log(i);