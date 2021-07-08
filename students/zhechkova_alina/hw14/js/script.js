// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function numbersCheck(a, b) {
    if (!a || !b) return;
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
}
const result1 = numbersCheck(2, 1);
console.log(result1);

// Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(a) {
    if (!a) return;
    let i = 1;
    let result = i;
    while (i < a) {
        i++;
        result = result * i;
    }
    return result;
}
const result2 = factorial(6);
console.log(result2)


// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function threeNums(a, b, c) {
    if (!a || !b || !c) return;
    return a * 100 + b * 10 + c;
}
const result3 = threeNums(1, 2, 3);
console.log(result3);

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function areaCount(height, length) {
    if (length === undefined) return height ** 2;
    return height * length;
}
const areaResult4 = areaCount(1);
console.log(areaResult4);


// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNumber(a) {
    if (!a) return;
    let delitel = 0;
    for (let i = 0; i < a; i++) {
        if (a % i === 0) delitel += i;
    }
    return (delitel === a);
}

function perfectResult(a) {
    let result = ''
    if (perfectNumber(a)) {
        result = 'Данное число является совершенным'
    } else {
        result = 'Данное число не является совершенным'
    }
    return result;
}
const perfectNumResult = perfectResult(6);
console.log(perfectNumResult);

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function perfectInDiap(min, max) {
    if (!min || !max) return;
    let i = min;
    let result = 0;
    while (i < max) {
        i++;
        if (perfectNumber(i)) console.log(i);
    }
}
const perfectDiapResult = perfectInDiap(1, 100);


// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function timeReturn(h, m, s) {
    if (!m) m = '00';
    if (!s) s = '00';
    let result;
    return result = validateTime(h) + ':' + validateTime(m) + ':' + validateTime(s);
}

function validateTime(x) {
    if (x < 10) {
        x = '0' + x;
    }
    return x;
}
const resultTime = timeReturn(1, 3, 2);
console.log(resultTime);

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function toSecond(h, m, s) {
    let result = 0;
    return result = h * 3600 + m * 60 + s;
}
const resultSecond = toSecond(11, 1, 2);
console.log(resultSecond + ' секунд');

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function toHours(sec) {
    let hours = Math.floor(sec / 3600);
    let min = Math.floor(sec / 60) - hours * 60;
    let second = sec - (hours * 3600) - (min * 60);
    return timeReturn(hours, min, second);
}
const resultToHours = toHours(resultSecond);
console.log(resultToHours);

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function dateDiffer(fHour, fMin, fSec, sHour, sMin, sSec) {
    const secondForFirst = toSecond(fHour, fMin, fSec);
    const secondForSecond = toSecond(sHour, sMin, sSec);
    const secondDiffer = secondForFirst - secondForSecond;
    return toHours(secondDiffer);
}
const resultDiffer = dateDiffer(10, 22, 3, 1, 2, 3);
console.log(resultDiffer);
