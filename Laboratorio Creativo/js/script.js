let clicked = true

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".contentWrapper").classList.toggle("expand");
    if (clicked) {
        document.getElementById("arrow").style.transform = "rotate(180deg)";
        document.getElementById("espandi").innerHTML = "Restringi";
        clicked = false;
    } else {
        document.getElementById("arrow").style.transform = "rotate(0deg)";
        document.getElementById("espandi").innerHTML = "Espandi";
        clicked = true;
    }
});


/*function expand() {
        document.getElementById("wrapper").style.transition = "height 2s ease 1s";
    if (clicked) {
        document.getElementById("wrapper").style.height = "fit-content";
        document.getElementById("intro").style.overflow = "visible";
        document.getElementById("arrow").style.transform = "rotate(180deg)";
        document.getElementById("espandi").innerHTML = "Restringi";
        clicked = false;
    } else {
        document.getElementById("wrapper").style.height = "50px";
        document.getElementById("intro").style.overflow = "hidden";
        document.getElementById("arrow").style.transform = "rotate(0deg)";
        document.getElementById("espandi").innerHTML = "Espandi";
        clicked = true;
    }
};*/