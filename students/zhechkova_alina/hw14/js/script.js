// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function numbersCheck(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
}
let result1 = numbersCheck(2, 1);
console.log(result1);

// Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial (a) {
    let i = 1;
    let result = i;
    while (i < a) {
        i++;
        result = result * i;
    }
    return result;
}
let result2 = factorial(6);
console.log(result2)


// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function threeNums (a, b, c) {
    return a * 100 + b * 10 + c;
}
let result3 = threeNums(1,2,3);
console.log(result3);

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function areaCount (height, length) {
    if (height === undefined) return length ** 2;
    if (length === undefined) return height ** 2;
    return height * length;
}
let areaResult4 = areaCount(1);
console.log(areaResult4);


// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNumber (a) {
    let delitel = 0;
    for (let i = 0; i < a; i++) {
        if (a % i === 0) delitel += i;
    }
    if (delitel === a) return 'Данное число является совершенным';
    return 'Данное число не является совершенным';
}
let perfectNumResult = perfectNumber(6);
console.log(perfectNumResult);

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function perfectInDiap (min, max) {
    let i = min;
    let result = 0;
    while (i < max) {
        i++;
        if (perfectNumber(i) === 'Данное число является совершенным') console.log(i);
    }
}
let perfectDiapResult = perfectInDiap(1, 100);


// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function timeReturn (h, m, s) {
    let result;
    if (h < 10) {
        h = 0 + String(h);
    }
    if (m < 10) {
        m = 0 + String(m);
    }
    if (s < 10) {
        s = 0 + String(s);
    }
    return result = h + ':' + m + ':' + s;
}
let resultTime = timeReturn(1,3,2);
console.log(resultTime);

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function toSecond (h, m, s) {
    let result = 0;
    return result = h * 3600 + m * 60 + s;
}
let resultSecond = toSecond(11, 1, 2) + ' секунд';
console.log(resultSecond);

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function toHours (sec) {
    let hours = Math.floor(sec / 3600);
    let min = Math.floor(sec / 60) - hours * 60;
    let second = sec - (hours * 3600) - (min * 60);
    return timeReturn (hours, min, second);
}
let resultToHours = toHours (39662);
console.log(resultToHours);

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function dateDiffer (fHour, fMin, fSec, sHour, sMin, sSec) {
    let secondForFirst = toSecond (fHour, fMin, fSec);
    let secondForSecond = toSecond (sHour, sMin, sSec);
    let secondDiffer = secondForFirst - secondForSecond;
    return toHours(secondDiffer);
}
let resultDiffer = dateDiffer (10,22,3,1,2,3);
console.log(resultDiffer);
