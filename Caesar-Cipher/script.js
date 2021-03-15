function function1() {
    let encrypt = true;
    if (encrypt) {
        document.querySelector(".encr-decr").style.display = "none";
        document.querySelector(".encrypt").style.display = "flex";
        document.getElementById("buttonsD").style.display = "none";
        document.getElementById("buttonsE").style.display = "flex";
        document.getElementById("rot5En").disabled = false;
        document.getElementById("rot13En").disabled = false;
        document.getElementById("rot47En").disabled = false;
    }
}

if (messageE.value.length > 0) {
    document.getElementById("rot13En").disabled = false;
}


function function2() {
    let decrypt = true
    if (decrypt) {
        document.querySelector(".encr-decr").style.display = "none";
        document.querySelector(".decrypt").style.display = "flex"
        document.getElementById("buttonsE").style.display = "none";
        document.getElementById("buttonsD").style.display = "flex";
        document.getElementById("rot5De").disabled = false;
        document.getElementById("rot13De").disabled = false;
        document.getElementById("rot47De").disabled = false;
    }
}

function back() {
    let arrow = true
    if (arrow) {
        document.querySelector(".encrypt").style.display = "none"
        document.querySelector(".decrypt").style.display = "none"
        document.querySelector(".encr-decr").style.display = "flex";
        document.getElementById("result").innerText = "RESULT";
        document.getElementById("formE").reset();
        document.getElementById("formD").reset();
        document.getElementById("rot5En").disabled = true;
        document.getElementById("rot13En").disabled = true;
        document.getElementById("rot47En").disabled = true;
        document.getElementById("rot5De").disabled = true;
        document.getElementById("rot13De").disabled = true;
        document.getElementById("rot47De").disabled = true;
    }
}