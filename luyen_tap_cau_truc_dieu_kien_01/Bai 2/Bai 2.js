function kiemtraso() {
    var tuoi = parseInt(document.getElementById('So').value);
    var result = document.getElementById('result');

    if (tuoi >= 16) {
        result.innerHTML = "Bạn đủ tuổi để học lớp 10.";
    } else {
        result.innerHTML = "Bạn không đủ tuổi để học lớp 10.";
    }
}