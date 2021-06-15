
// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function twoNumbers(firstNumber, secondNumer){

    console.log (firstNumber,secondNumer);
    let result = 0;

    if ((firstNumber !== undefined) && (secondNumer !== undefined)){
        if (firstNumber > secondNumer) {
            result = 1;
            return result;
        } else if (firstNumber < secondNumer){
            result = -1;
            return result;
        } else return result;
    } else return ("Вы ввели неверные данные");

}

console.log(twoNumbers(8));
console.log(twoNumbers(5,5));
console.log(twoNumbers(1,9));
console.log(twoNumbers(7,6));

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {

    if (n === 0) return 1;
    else return n * factorial(n - 1);
}

console.log(factorial(+prompt("Введите число для вычисления факториала")));

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function number(firstNumber, secondNumer, thirdNumber) {

    if (isNaN(firstNumber) || isNaN(secondNumer) || isNaN(thirdNumber)) return "Вы ввели не цифру";
    if (firstNumber < 1 || firstNumber > 9) return 'Первая цифра не может быть: меньше 1 и больше 9';
    if (secondNumer < 0 || secondNumer > 9) return 'Вторая цифра не может быть: меньше 0 и больше 9';
    if (thirdNumber < 0 || thirdNumber > 9) return 'Третья цифра не может быть: меньше 0 и больше 9';

    const res = (firstNumber * 100) + (secondNumer * 10) + thirdNumber;

    return res;
};

console.log(number(+prompt("Введите первую цифру"), +prompt("Введите вторую цифру"), +prompt("Введите третью цифру")));

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function squareRectangle(a, b) {
    let squareRectangle;

    if (a === 0 || isNaN(a)) return 'Вы не ввели основной параметр - а!!!';
    if (a < 0 || b < 0) return 'Сторона прямоугольника не может быть меньше 0!!!';
    if (a !== 0 && (b === 0 || isNaN(b))) {
        squareRectangle = a * a;
        return 'Площадь квадрата равна: ' + squareRectangle;
    } else {
        squareRectangle = a * b;
        return 'Площадь прямоугольника равна: ' + squareRectangle;
    }
};

console.log(squareRectangle(+prompt('Введите длину стороны прямоугольника а:'), +prompt('Введите длину стороны прямоугольника b:')));

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNumber(num) {
let number = num;
let s = 0;

    if (isNaN(number)) return "NaN";
    if (number === 0) return 'Null';
    for (let i = 1; number > i; i++) {

        if (number % i == 0) s += i;

    }
        if (s === number) return number;
        return false;
};

let res = perfectNumber(+prompt('Введите число:'));

function answerPerfectNumber(a) {

    if (a === "NaN") {
         return 'Вы ввели не число!';
    } else if (a === 'Null') {
        return "Вы либо ввели 0, либо не ввели ничего!";
    } else if (a !== false) {
        return "Введенное число являеться совершенным!";
    } else {
        return "Введенное число НЕ являеться совершенным!";
    }
};
console.log(answerPerfectNumber(res));
    
    // 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

    
    // 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function takesTime(hh, mm, ss) {
let time = '';
let hours = '';
let minutes = '';
let seconds = '';
    if (isNaN(hh) || isNaN(mm) || isNaN(ss)) return "Вы ввели не числа!!!";
    if (hh < 0 || mm < 0 || ss < 0) return 'Часы, минуты и секунды не могут меньше 0!!!';
    if (hh > 23) return 'Часы не могут принимать значение больше 23!!!';
    if (mm > 59 || ss > 59) return 'Минуты и секунды не могут принимать знчение больше 59!!!';
    hours = (hh < 10) ? ('0' + hh) : hh;
    minutes = (mm < 10) ? ('0' + mm) : mm;
    seconds = (ss < 10) ? ('0' + ss) : ss;
    time = hours + ':' + minutes + ':' + seconds;
    return time;
};
let res = takesTime(+prompt('Введите часы:'), +prompt('Введите минуты:'), +prompt('Введите секунды:'));
console.log('Время ' + res);

    // 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
    // 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
    // 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»


