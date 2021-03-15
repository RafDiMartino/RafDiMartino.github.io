function rot5E() {
    let message = document.getElementById("messageE").value;
    let s = [];
    for (i = 0; i < message.length; i++) {
        idx = message.charCodeAt(i);
        if ((idx >= 48) && (idx <= 57)) {
            if (idx <= 52) {
                s[i] = String.fromCharCode(((idx + 5)));
            } else {
                s[i] = String.fromCharCode(((idx - 5)));
            }
        } else {
            s[i] = String.fromCharCode(idx);
        }
    }
    let result = s.join('');
    document.getElementById("result").innerText = result;
}

function rot5D() {
    let message = document.getElementById("messageD").value;
    let s = [];
    for (i = 0; i < message.length; i++) {
        idx = message.charCodeAt(i);
        if ((idx >= 48) && (idx <= 57)) {
            if (idx <= 52) {
                s[i] = String.fromCharCode(((idx + 5)));
            } else {
                s[i] = String.fromCharCode(((idx - 5)));
            }
        } else {
            s[i] = String.fromCharCode(idx);
        }
    }
    let result = s.join('');
    document.getElementById("result").innerText = result;
}