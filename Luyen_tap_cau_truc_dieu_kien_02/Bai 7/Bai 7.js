function tinh() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var delta = b * b - 4 * a * c;
    var x1, x2;

    if (a === 0) {
        // Trường hợp a = 0, giải phương trình bậc nhất bx + c = 0
        if (b !== 0) {
            x1 = -c / b;
            document.getElementById('result').innerText = "Nghiệm của phương trình là: x = " + x1;
        } else {
            if (c !== 0) {
                document.getElementById('result').innerText = "Phương trình vô nghiệm";
            } else {
                document.getElementById('result').innerText = "Phương trình có vô số nghiệm";
            }
        }
    } else {
        // Trường hợp bình thường, giải phương trình bậc hai ax^2 + bx + c = 0
        if (delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.getElementById('result').innerText = "Nghiệm của phương trình là: x1 = " + x1 + ", x2 = " + x2;
        } else if (delta === 0) {
            x1 = -b / (2 * a);
            document.getElementById('result').innerText = "Nghiệm kép của phương trình là: x = " + x1;
        } else {
            document.getElementById('result').innerText = "Phương trình không có nghiệm thực";
        }
    }
}