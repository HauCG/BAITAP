function chuyendoi() {
    var m = parseInt(document.getElementById('m').value);
    var result = m * 3.2808;

    var resultElement = document.getElementById('resultElement');
    resultElement.textContent = result;
}
