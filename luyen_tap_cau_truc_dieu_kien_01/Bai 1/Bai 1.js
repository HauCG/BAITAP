function checkchiahet() {
    var soa = parseInt(document.getElementById('soa').value);
    var sob = parseInt(document.getElementById('sob').value);
    var result = document.getElementById('result');

    if (soa % sob == 0) {
        result.innerHTML = "True: A chia het cho B";
    } else {
        result.innerHTML = "False: A ko chia het cho B";
    }
}