document.getElementById('calculate-btn').addEventListener('click', calculatetotal);

function calculatetotal() {

    const giaCuocCoDinh = parseFloat(document.getElementById('giaCuocCoDinh').textContent);
    const phutGoiNoiMang = parseFloat(document.getElementById('phutGoiNoiMang').textContent);
    const phutGoiNgoaiMang = parseFloat(document.getElementById('phutGoiNgoaiMang').textContent);

    // tính tổng
    const total = giaCuocCoDinh + phutGoiNoiMang * 790 + phutGoiNgoaiMang * 1000;

    // hiện kq
    document.getElementById('total').textContent = total.toFixed(2);
}
