"use strict";

// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function twoNumbers(firstNumber, secondNumer) {
  console.log(firstNumber, secondNumer);
  var result = 0;

  if (firstNumber !== undefined && secondNumer !== undefined) {
    if (firstNumber > secondNumer) {
      result = 1;
      return result;
    } else if (firstNumber < secondNumer) {
      result = -1;
      return result;
    } else return result;
  } else return "Вы ввели неверные данные";
}

console.log(twoNumbers(8));
console.log(twoNumbers(5, 5));
console.log(twoNumbers(1, 9));
console.log(twoNumbers(7, 6)); // 2. Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {
  if (n === 0) return 1;else return n * factorial(n - 1);
}

console.log(factorial(+prompt("Введите число для вычисления факториала"))); // 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function number(firstNumber, secondNumer, thirdNumber) {
  if (isNaN(firstNumber) || isNaN(secondNumer) || isNaN(thirdNumber)) return "Вы ввели не цифру";
  if (firstNumber < 1 || firstNumber > 9) return 'Первая цифра не может быть: меньше 1 и больше 9';
  if (secondNumer < 0 || secondNumer > 9) return 'Вторая цифра не может быть: меньше 0 и больше 9';
  if (thirdNumber < 0 || thirdNumber > 9) return 'Третья цифра не может быть: меньше 0 и больше 9';
  var result = firstNumber * 100 + secondNumer * 10 + thirdNumber;
  return result;
}

;
console.log(number(+prompt("Введите первую цифру"), +prompt("Введите вторую цифру"), +prompt("Введите третью цифру"))); // 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function squareRectangle(a, b) {
  var squareRectangle;
  if (a === 0 || isNaN(a)) return 'Вы не ввели a';
  if (a < 0 || b < 0) return 'Сторона прямоугольника не может быть меньше 0';

  if (a !== 0 && (b === 0 || isNaN(b))) {
    squareRectangle = a * a;
    return 'Площадь квадрата равна: ' + squareRectangle;
  } else {
    squareRectangle = a * b;
    return 'Площадь прямоугольника равна: ' + squareRectangle;
  }
}

;
console.log(squareRectangle(+prompt('Введите длину стороны прямоугольника а:'), +prompt('Введите длину стороны прямоугольника b:'))); // 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNumber(num) {
  var number = num;
  var s = 0;
  if (isNaN(number)) return "NaN";
  if (number === 0) return 'Null';

  for (var i = 1; number > i; i++) {
    if (number % i == 0) s += i;
  }

  if (s === number) return number;
  return false;
}

;
var reqNumber = perfectNumber(+prompt('Введите число:'));

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
}

;
console.log(answerPerfectNumber(reqNumber)); // 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function perfectNumDiapasone(firstNumber, secondNumer) {
  var thirdNumber;
  var answer = '';
  if (firstNumber === 0 && secondNumer === 0) return 'Вы либо ввели оба 0? Или не ввели ничего!';
  if (Math.min(firstNumber, secondNumer) < 0) return 'В диапазоне не могут присутствовать значения ниже нуля!';

  for (var j = Math.min(firstNumber, secondNumer); j < Math.max(firstNumber, secondNumer); j++) {
    thirdNumber = perfectNumber(j);

    if (thirdNumber === j) {
      answer = answer + ' ' + thirdNumber;
    }

    if (thirdNumber === false) continue;
  }

  return "В диапазоне присутствуют следующие совершенные числа:" + answer;
}

;
console.log(perfectNumDiapasone(+prompt('Введите число начала диапазона:'), +prompt('Введите число конца диапазона:'))); // 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function takesTime(hh, mm, ss) {
  var time = '';
  var hours = '';
  var minutes = '';
  var seconds = '';
  if (isNaN(hh) || isNaN(mm) || isNaN(ss)) return "Вы ввели не числа!!!";
  if (hh < 0 || mm < 0 || ss < 0) return 'Часы, минуты и секунды не могут меньше 0!!!';
  if (hh > 23) return 'Часы не могут принимать значение больше 23!!!';
  if (mm > 59 || ss > 59) return 'Минуты и секунды не могут принимать знчение больше 59!!!';
  hours = hh < 10 ? '0' + hh : hh;
  minutes = mm < 10 ? '0' + mm : mm;
  seconds = ss < 10 ? '0' + ss : ss;
  time = hours + ':' + minutes + ':' + seconds;
  return time;
}

;
var enteredTime = takesTime(+prompt('Введите часы:'), +prompt('Введите минуты:'), +prompt('Введите секунды:'));
console.log('Время: ' + enteredTime); // 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function timeInSec(hh, mm, ss) {
  var hourSec = 3600;
  var minutesSec = 60;
  var timeInSeconds;
  if (isNaN(hh) || isNaN(mm) || isNaN(ss)) return "Вы ввели не числа!!!";
  if (hh < 0 || mm < 0 || ss < 0) return 'Часы, минуты и секунды не могут меньше 0!!!';
  if (hh > 23) return 'Часы не могут принимать значение больше 23!!!';
  if (mm > 59 || ss > 59) return 'Минуты и секунды не могут принимать значение больше 59!!!';
  timeInSeconds = hh * hourSec + mm * minutesSec + ss;
  return timeInSeconds;
}

;
var timeSeconds = timeInSec(+prompt('Введите часы:'), +prompt('Введите минуты:'), +prompt('Введите секунды:'));
console.log("Введеному количеству времени, соответсвует " + timeSeconds + " секунд"); // 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function timeSecInHour(second) {
  var hours = '';
  var minuts = '';
  var seconds = '';
  var time = '';
  var hourSec = 3600;
  var mimutesSec = 60;
  if (isNaN(second)) return 'Вы ввели не числа!!!';
  if (second < 0) return 'Cекунды не могут быть меньше 0!!!';
  hours = ~~(second / hourSec);
  second = second % hourSec;
  minuts = minuts = ~~(second / mimutesSec);
  second = second % mimutesSec;
  hours = hours < 10 ? '0' + hours : hours;
  minuts = minuts < 10 ? '0' + minuts : minuts;
  seconds = second < 10 ? '0' + second : second;
  time = hours + ':' + minuts + ':' + seconds;
  return time;
}

;
var secInOur = timeSecInHour(+prompt('Введите количество секунд:'));
console.log("Веденому количеству секунд, соответствует " + secInOur); // 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function differenceTime(hh1, mm1, ss1, hh2, mm2, ss2) {
  var timeDifferen;
  var timeSec_1 = timeInSec(hh1, mm1, ss1);
  var timeSec_2 = timeInSec(hh2, mm2, ss2);
  timeDifferen = Math.max(timeSec_1, timeSec_2) - Math.min(timeSec_1, timeSec_2);
  timeDifferen = timeSecInHour(timeDifferen);
  return timeDifferen;
}

;
var timeDiff = differenceTime(+prompt('Введите часы_1:'), +prompt('Введите минуты_1:'), +prompt('Введите секунды_1:'), +prompt('Введите часы_2:'), +prompt('Введите минуты_2:'), +prompt('Введите секунды_2:'));
console.log('Разница во времени составляет ' + timeDiff);