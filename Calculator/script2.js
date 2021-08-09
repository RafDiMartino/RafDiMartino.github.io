// let display = document.querySelector(".screen")

// let buttons = Array.from(document.getElementsByTagName("button"))



// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//                 display.innerText += e.target.innerText;
//         }
//     );
// });

let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(value)) {
        handleOperator(value)
    } else {
        handleNumber(value)
    }
    screen.innerText = buffer;
}