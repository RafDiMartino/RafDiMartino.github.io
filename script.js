document.getElementById("p11").onclick = function() {
    window.open("http://rafdimartino.github.io/the-art-of-war-random-quote-generator");
}

document.getElementById("p10").onclick = function() {
    window.open("https://rafdimartino.github.io/react-counter-app/");
}

document.getElementById("p9").onclick = function() {
    window.open("Laboratorio Creativo/home.html");
}

document.getElementById("p8").onclick = function() {
    window.open("Caesar-Cipher/index.html");
}

document.getElementById("p7").onclick = function() {
    window.open("DigitalClock/index.html");
}

document.getElementById("p6").onclick = function() {
    window.open("Virtual Piano-/Virtual Piano.html");
}

document.getElementById("p5").onclick = function() {
    window.open("Flashcards/index.html");
}

document.getElementById("p4").onclick = function() {
    window.open("Product Landing Page/Landing Page.html");
}

document.getElementById("p3").onclick = function() {
    window.open("Survey Form/Survey Form.html");
}

document.getElementById("p2").onclick = function() {
    window.open("Technical Documentation Page/Technical Documentation Page.html");
}

document.getElementById("p1").onclick = function() {
    window.open("Tribute-Page/tribute page.html");
}


setTimeout(() => {
    document.getElementById("arrow").style.display = "grid";
    document.getElementById("lightMode").style.display = "flex";
}, 3000);


let clicked = true

function lightMode() {

    if (clicked) {
        document.getElementById("lightMode").style.justifyContent = "flex-end";
        document.getElementById("lightMode").style.backgroundColor = "black";
        document.getElementById("button").style.backgroundColor = "rgb(220, 220, 220)";
        document.getElementById("body").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("fullNameB").style.display = "grid";
        document.getElementById("fullNameW").style.display = "none";
        document.getElementById("pBlack").style.display = "grid";
        document.getElementById("pWhite").style.display = "none";
        document.getElementById("arrowBlack").style.display = "grid";
        document.getElementById("arrow").style.display = "none";
        document.getElementById("allWhite").style.display = "none";
        document.getElementById("allBlack").style.display = "flex";
        let y = document.querySelectorAll(".desTitle")
        for (let i = 0; i < y.length; i++) {
            y[i].style.backgroundColor = "rgba(255, 255, 255, 0.833)";
            y[i].style.color = "black";
        }
        clicked = false;

    } else {
        document.getElementById("lightMode").style.justifyContent = "flex-start";
        document.getElementById("lightMode").style.backgroundColor = "white";
        document.getElementById("button").style.backgroundColor = "rgb(39, 39, 39)";
        document.getElementById("body").style.backgroundColor = "rgb(39, 39, 39)";
        document.getElementById("fullNameB").style.display = "none";
        document.getElementById("fullNameW").style.display = "grid";
        document.getElementById("pBlack").style.display = "none";
        document.getElementById("pWhite").style.display = "grid";
        document.getElementById("arrow").style.display = "grid";
        document.getElementById("arrowBlack").style.display = "none";
        document.getElementById("allWhite").style.display = "flex";
        document.getElementById("allBlack").style.display = "none";
        let y = document.querySelectorAll(".desTitle")
        for (let i = 0; i < y.length; i++) {
            y[i].style.backgroundColor = "rgba(0, 0, 0, 0.733)";
            y[i].style.color = "white";
        }
        clicked = true;
    }
}