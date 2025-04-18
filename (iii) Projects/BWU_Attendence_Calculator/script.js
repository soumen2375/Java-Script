let total_class = document.getElementById("total_class");
let total_attend = document.getElementById("total_attend");

let current_percentage = total_attend / total_class * 100;
let current_percentage_display = document.getElementById("current_percentage_display").innerHTML=current_percentage;

let need_attedece = Math.ceil(75 * total_class / 100 - total_attend);
let need_attedece_display = document.getElementById("need_attedece_display").innerHTML=need_attedece;