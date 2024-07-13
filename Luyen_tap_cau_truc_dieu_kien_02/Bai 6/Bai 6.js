function tinh() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    if (a === 0) {
        if (b === 0) {
            document.getElementById('result').textContent = "Phương trình có vô số nghiệm x";
        } else {
            document.getElementById('result').textContent = "Phương trình vô nghiệm";
        }
    } else {
        var result = -b / a;
        document.getElementById('result').textContent = "x cần tìm là: " + result;
    }
}