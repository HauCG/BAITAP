function kiemtraso() {
    var so = parseInt(document.getElementById('So').value);
    var result = document.getElementById('result');

    if (so === 0) {
        result.innerHTML = "Số của bạn bằng 0.";
    } else if (so < 0) {
        result.innerHTML = "Số của bạn nhỏ hơn 0.";
    } else {
        result.innerHTML = "Số của bạn lớn hơn 0.";
    }
}