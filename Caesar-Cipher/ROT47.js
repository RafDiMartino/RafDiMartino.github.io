const rot47E = () => {

    let message = document.getElementById("messageE").value;

    let s = [];

    for (let i = 0; i < message.length; i++) {
        let j = message.charCodeAt(i);
        if ((j >= 33) && (j <= 126)) {
            s[i] = String.fromCharCode(33 + ((j + 14) % 94));
        } else { s[i] = String.fromCharCode(j); }
    }
    let result = s.join('');

    document.getElementById("result").innerText = result;
}

const rot47D = () => {

    let message = document.getElementById("messageD").value;

    let s = [];

    for (let i = 0; i < message.length; i++) {
        let j = message.charCodeAt(i);
        if ((j >= 33) && (j <= 126)) {
            s[i] = String.fromCharCode(33 + ((j + 14) % 94));
        } else { s[i] = String.fromCharCode(j); }
    }
    let result = s.join('');

    document.getElementById("result").innerText = result;
}