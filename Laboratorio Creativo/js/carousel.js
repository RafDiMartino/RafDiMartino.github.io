document.querySelector(".dot0").addEventListener("click", function() {
    document.querySelector(".about0").style.opacity = "1";
    document.querySelector(".about1").style.opacity = "0";
    document.querySelector(".about2").style.opacity = "0";
    document.querySelector(".about3").style.opacity = "0";
    document.querySelector(".dot0").style.color = "rgb(255, 213, 25)"
    document.querySelector(".dot1").style.color = "white"
    document.querySelector(".dot2").style.color = "white"
    document.querySelector(".dot3").style.color = "white"
})

document.querySelector(".dot1").addEventListener("click", function() {
    document.querySelector(".about0").style.opacity = "0";
    document.querySelector(".about1").style.opacity = "1";
    document.querySelector(".about2").style.opacity = "0";
    document.querySelector(".about3").style.opacity = "0";
    document.querySelector(".dot0").style.color = "white"
    document.querySelector(".dot1").style.color = "rgb(255, 213, 25)"
    document.querySelector(".dot2").style.color = "white"
    document.querySelector(".dot3").style.color = "white"
})

document.querySelector(".dot2").addEventListener("click", function() {
    document.querySelector(".about0").style.opacity = "0";
    document.querySelector(".about1").style.opacity = "0";
    document.querySelector(".about2").style.opacity = "1";
    document.querySelector(".about3").style.opacity = "0";
    document.querySelector(".dot0").style.color = "white"
    document.querySelector(".dot1").style.color = "white"
    document.querySelector(".dot2").style.color = "rgb(255, 213, 25)"
    document.querySelector(".dot3").style.color = "white"
})

document.querySelector(".dot3").addEventListener("click", function() {
    document.querySelector(".about0").style.opacity = "0";
    document.querySelector(".about1").style.opacity = "0";
    document.querySelector(".about2").style.opacity = "0";
    document.querySelector(".about3").style.opacity = "1";
    document.querySelector(".dot0").style.color = "white"
    document.querySelector(".dot1").style.color = "white"
    document.querySelector(".dot2").style.color = "white"
    document.querySelector(".dot3").style.color = "rgb(255, 213, 25)"
})