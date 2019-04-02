let number = Number(prompt('Nhap so'));
let kiemTra = true;
if (number < 2) {
    flag = false;
} else {
    for (let i = 2; i <= number - 1; i++) {
        if (number % i == 0) {
            kiemTra = false;
            break;
        }
    }
}
if (kiemTra == true) {
    document.write(number);
}
