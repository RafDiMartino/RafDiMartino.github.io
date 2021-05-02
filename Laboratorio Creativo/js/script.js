let clicked = true

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".contentWrapper").classList.toggle("expand");
    if (clicked) {
        document.getElementById("arrow").style.transform = "rotate(180deg)";
        document.getElementById("espandi").innerHTML = "Restringi";
        clicked = false;
    } else {
        document.getElementById("arrow").style.transform = "rotate(0deg)";
        document.getElementById("espandi").innerHTML = "Per saperne di piú clicca quí";
        clicked = true;
    }
});

let toggled = true

document.querySelector(".grid-toggle").addEventListener("click", () => {
    

    document.querySelector(".gridGallery").classList.toggle("grid-list");
    if(toggled) {
        document.getElementById("imgList").style.display = "none";
        document.getElementById("imgGrid").style.display = "block";
        toggled = false;
    }else {
        document.getElementById("imgList").style.display = "block";
        document.getElementById("imgGrid").style.display = "none";
        toggled = true;
    }
})