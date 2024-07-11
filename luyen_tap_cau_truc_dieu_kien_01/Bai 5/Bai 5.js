function calculate() {
    // lấy giá trị
    const diemKT = parseFloat(document.getElementById('diemKT').textContent);
    const diemGK = parseFloat(document.getElementById('diemGK').textContent);
    const diemCK = parseFloat(document.getElementById('diemCK').textContent);

    // tính điểm trung bình
    const average = (diemKT + diemGK * 2 + diemCK * 3) / 6;

    // tính tb
    document.getElementById('average').textContent = average.toFixed(2);

    // điều kiện chọn học lực
    let xepLoai = '';
    if (average >= 8.5) {
        xepLoai = 'Giỏi';
    } else if (average >= 7) {
        xepLoai = 'Khá';
    } else if (average >= 5) {
        xepLoai = 'Trung bình';
    } else {
        xepLoai = 'Yếu';
    }

    document.getElementById('xepLoai').textContent = xepLoai;
}
