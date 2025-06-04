let btn1 = document.querySelector("#mouse-out");
let btn2 = document.querySelector("#keypress");
let div = document.querySelector("#scroll");

// Mouse Out
btn1.addEventListener("mouseout", () => {
    console.log("Mouse Out");
});

// Keypress
btn2.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        console.log("Key is pressed");
    }
});

// Scroll
div.onscroll = () => {
    console.log("Using onscroll");
};

/*Another:-
window.addEventListener("scroll", (event) => {
    console.log("Scrolling");
});
*/

// Load
window.addEventListener("load", () => {
    console.log("Page loaded");
});

/*Another:-
window.onload = function () {
    console.log("Page loaded");
};
*/
