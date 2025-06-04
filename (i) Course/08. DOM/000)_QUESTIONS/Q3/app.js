let h3 = document.querySelector("h3");
let btn = document.querySelector("button");
let div = document.querySelector("div");


btn.addEventListener("click", function () {
    let color = getRandomColor();
    h3.innerText = color;
    div.style.backgroundColor = color;
});

function getRandomColor() {
    let red = Math.floor((Math.random()) * 255);
    let green = Math.floor((Math.random()) * 255);
    let blue = Math.floor((Math.random()) * 255);

    return (`rgb(${red}, ${green}, ${blue})`);
}