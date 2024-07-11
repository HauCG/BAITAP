function chuyendoi() {
    var m = parseInt(document.getElementById('m').value);
    var result = m * m;

    var resultElement = document.getElementById('resultElement');
    resultElement.textContent = result;
}
