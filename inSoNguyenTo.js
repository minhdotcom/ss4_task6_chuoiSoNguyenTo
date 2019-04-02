let maxCount = Number(prompt('Nhap so luong so nguyen to'));
let count = 1;
let number = 2;
let kiemTra = true;
while (count <= maxCount) {
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
        document.write(number + '<br>');
    }
    number++;
    count++;
}