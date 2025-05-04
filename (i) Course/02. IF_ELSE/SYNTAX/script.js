/* 
            if(condition:1 boolean expression True or False){
                //body         
            }else if(condition2){
                //do this, if condition1 -> false
            }else{
                //do this, if condition1 & condition2 -> false
            }
*/
let score = prompt("Enter score:");

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}