1.//  Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let rangeStart = +prompt("Введите начало диапазона");
let rangeEnd = +prompt("Введите конец диапазона");
let rangeSum = 0;
if (Number.isNaN(rangeStart)) {
    rangeSum = "Можно ввести только число";
}
else if (Number.isNaN(rangeEnd)) {
    rangeSum = "Можно ввести только число";
}

while(rangeStart <= rangeEnd) {       
    rangeSum += rangeStart;  
    rangeStart++;
    }
console.log(rangeSum)


2.//  Запросить 2 числа и найти только наибольший общий делитель.
const firstNum = +prompt("Введите первое число");
const secondNum = +prompt("Введите второе число");
let rezDel;
i = 0;
if (firstNum === secondNum) {
    rezDel = `Наибольший общий делитель - ${firstNum}`;
}
if (firstNum < secondNum) {
    while (i < firstNum) {
        i++;
        if (firstNum % i === 0 && secondNum % i === 0)
        rezDel = `Наибольший общий делитель - ${i}`;
    }
}
console.log(rezDel);

3.//  Запросить у пользователя число и вывести все делители этого числа.
const askNumforAllDel = +prompt("Введите число");
let allDel = '';
for (i = 0; i <= askNumforAllDel; i++) {
    if (askNumforAllDel % i === 0) {
        allDel = `${allDel} ${i}`;
    }
}
let allDelResult = 'Все делители введенного числа - ' + allDel;
console.log(allDelResult); 

4.//Определить количество цифр в введенном числе.
let askNumQuantity = +prompt("Введите число");
let k = 0;
for(k = 0; askNumQuantity > 1; k++ ) {
    askNumQuantity = askNumQuantity / 10;
}
let quantityNum = `Количество цифр - ${k}`;
console.log(quantityNum);


5.//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
let userNum;
let userPositiveNum = 0;
let userNegativeNum = 0;
let userZeroNum = 0;
let userEvenNum = 0;
let userOddNum = 0;
for (let j = 1; j <= 10; j++) {
    userNum = +prompt('Введите число');
    if (userNum > 0) {
        userPositiveNum = ++userPositiveNum;
    }
    if (userNum < 0) {
        userNegativeNum = ++userNegativeNum;
    }
    if (userNum === 0) {
        userZeroNum = ++userZeroNum;
    }
    if (userNum % 2 ==0) {
        userEvenNum = ++userEvenNum;
    }
    if (userNum % 2 !== 0) {
        userOddNum = ++userOddNum;
    }

}

let resultUserNum = `Положительных чисел - ${userPositiveNum}, отрицательных чисел - ${userNegativeNum}, введенных нулей - ${userZeroNum}, четных чисел - ${userEvenNum}, нечетных чисел - ${userOddNum}`;
console.log(resultUserNum);
