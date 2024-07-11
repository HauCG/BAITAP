function tinhDienTich() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var result = a * b;

    var resultElement = document.getElementById('result');
    resultElement.textContent = "Diện tích hình chữ nhật là: " + result;
}
