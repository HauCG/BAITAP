function sosanhso() {
    var so1 = parseInt(document.getElementById('So 1').value);
    var so2 = parseInt(document.getElementById('So 2').value);
    var so3 = parseInt(document.getElementById('So 3').value);
    var result = document.getElementById('result');

    if ( so1>so2 && so1>so3 ) {
        result.innerHTML = "Số lớn nhất là Số Thứ 1.";
    } else if ( so2>so1 && so2>so3 ) {
        result.innerHTML = "Số lớn nhất là Số Thứ 2.";
    } else {
        result.innerHTML = "Số lớn nhất là Số Thứ 3.";
    }
}