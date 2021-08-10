const rot13E = () => {

    let message = document.getElementById("messageE").value;

    let result = (message ? message : this).split('').map(function(_) {
        if (!_.match(/[A-za-z]/)) return _;
        c = Math.floor(_.charCodeAt(0) / 97);
        k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
        return String.fromCharCode(k + ((c == 0) ? 64 : 96));
    }).join('');

    document.getElementById("result").innerText = result;
}

const rot13D = () => {

    let message = document.getElementById("messageD").value;

    let result = (message ? message : this).split('').map(function(_) {
        if (!_.match(/[A-za-z]/)) return _;
        c = Math.floor(_.charCodeAt(0) / 97);
        k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
        return String.fromCharCode(k + ((c == 0) ? 64 : 96));
    }).join('');

    document.getElementById("result").innerText = result;
}