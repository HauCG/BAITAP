function chuyendoi() {
    var C = parseInt(document.getElementById('doC').value);
    var result = C * 9 / 5 + 32;

    var resultElement = document.getElementById('resultElement');
    resultElement.textContent = result;
}
