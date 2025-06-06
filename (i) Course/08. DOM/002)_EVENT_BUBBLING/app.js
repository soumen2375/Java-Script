let div = document.querySelector("div");
let ul  = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("Div is clicked!");
});
ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Ul is clicked!");
});

for(list of li){
    list.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("List is clicked!");
    });
}
