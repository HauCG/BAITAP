function tinhhoahong() {
    var loiNhuan = document.getElementById('soa').value;
    var phanTramHoaHong = document.getElementById('sob').value;

    if (loiNhuan && phanTramHoaHong) {
        var hoaHong = (loiNhuan * phanTramHoaHong) / 100;
        document.getElementById('result').innerText = 'Hoa hồng của bạn là: ' + hoaHong;
    } else {
        document.getElementById('result').innerText = 'Vui lòng nhập đúng thông tin.';
    }
}