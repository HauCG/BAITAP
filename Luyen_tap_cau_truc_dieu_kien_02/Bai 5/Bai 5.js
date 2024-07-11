function tinhDienTich() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var result = 0.5 * a * b;

    var resultElement = document.getElementById('result');
    resultElement.textContent = "Diện tích tam giác là: " + result;
}