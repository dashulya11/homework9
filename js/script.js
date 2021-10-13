//1
const x = 10;
const y = 7;
alert(x > y ? 'x больше, чем y' : 'x не больше, чем y');
//2
const num = +prompt('Введите число:');
if (num % 2 === 0) {
    alert(`Число ${num} четное`);
} else {
    alert(`Число ${num} нечетное`);
}
//3
const integerNum = prompt('Введите целое число:');
if (isNaN(integerNum)) {
    console.log('Вы ввели не число');
} else {
    console.log(`В этом числе ${integerNum.length} цифр(ы)`);
    if (integerNum > 0) {
    console.log(`Число ${integerNum} однозначно положительное`);
    }   else if(+integerNum < 0) {
            console.log(`Число ${integerNum} однозначно отрицательное`);
        }
    }
//4
const num1 = +prompt("Введите число:");
const num2 = +prompt("Введите число:");
const num3 = +prompt("Введите число:");
if (num1 > num2 && num1 > num3) {
    console.log(`Число ${num1} является наибольшим`)
} else if (num2 > num1 && num2 > num3) {
    console.log(`Число ${num2} является наибольшим`)
} else if (num3 > num2 && num3 > num1) {
    console.log(`Число ${num3} является наибольшим`)
} 
//5
const a = +prompt("Введите длину первой стороны:");
const b = +prompt("Введите длину второй стороны:");
const c = +prompt("Введите длину третей стороны:");
if (a < c + b && a>0 && b>0 && c>0) {
    console.log(`Треугольник может существовать при таких длинах a=${a} и b=${b} и c=${c}`);
} else if (b < a + c && a>0 && b>0 && c>0) {
    console.log(`Треугольник может существовать при таких длинах a=${a} и b=${b} и c=${c}`);
} else if (c < a + b && a>0 && b>0 && c>0) {
    console.log(`Треугольник может существовать при таких длинах a=${a} и b=${b} и c=${c}`);
} else {
    console.log('Треугольник не может существовать');
}
