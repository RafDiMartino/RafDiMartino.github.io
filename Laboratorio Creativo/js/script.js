let clicked = true;

function expand() {

    if (clicked) {
        document.getElementById("wrapper").style.height = "fit-content";
        document.getElementById("intro").style.overflow = "visible";
        document.getElementById("arrow").style.transform = "rotate(180deg)";
        document.getElementById("espandi").innerHTML = "Restringi";
        clicked = false;
    } else {
        document.getElementById("wrapper").style.height = "100px";
        document.getElementById("intro").style.overflow = "hidden";
        document.getElementById("arrow").style.transform = "rotate(0deg)";
        document.getElementById("espandi").innerHTML = "Espandi";
        clicked = true;
    }
};