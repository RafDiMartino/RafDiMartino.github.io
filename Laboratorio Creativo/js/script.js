

document.querySelector("button").addEventListener("click", () => {

    let clicked = true

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
    preventDefault()
});



document.querySelector(".grid-toggle").addEventListener("click", () => {
    
    let toggled = true

    document.querySelector(".gridGallery").classList.toggle("grid-list");
    if(toggled) {
        document.getElementById("imgList").style.display = "none";
        document.getElementById("imgGrid").style.display = "block";
        let y = document.querySelectorAll(".images")
        for (let i = 0; i < y.length; i++) {
            y[i].style.height = "auto";
        }
        toggled = false;
    }else {
        document.getElementById("imgList").style.display = "block";
        document.getElementById("imgGrid").style.display = "none";
        let y = document.querySelectorAll(".images")
        for (let i = 0; i < y.length; i++) {
            y[i].style.height = "200px";
        }
        toggled = true;
    }
    preventDefault()
})
