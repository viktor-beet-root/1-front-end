"use strict";

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
var fisrtNum = +prompt('Введите число от ', '');
var lastNum = +prompt('Введите число до ', '');
var sum = 0;

for (var i = fisrtNum; i <= lastNum; i++) {
  sum = sum + i;
}

var resultSumOfNum = 'Cумма всех чисел ' + sum;
console.log(resultSumOfNum); 

// 2. Запросить 2 числа и найти только наибольший общий делитель.

var numFisrt = +prompt('Введите первое число ', '');
var numSecond = +prompt('Введите число ', '');
var min = numFisrt < numSecond ? numFisrt : numSecond;
console.log(min);
var max = 1;

while (min > 0) {
  if (!(numFisrt % min) && !(numSecond % min)) {
    max = min;
    break;
  }

  min--;
}

var resultMaxNumber = "Наибольший общий делитель " + max;
console.log(resultMaxNumber); 

// 3. Запросить у пользователя число и вывести все делители этого числа.

var num = +prompt('Введите число ', '');
var allNum = '';
var newNum = num;

while (newNum > 0) {
  if (num % newNum === 0) allNum = allNum + ' ' + newNum;
  newNum--;
}

var resultAllNum = 'Все делители числа ' + allNum;
console.log(resultAllNum); 

// 4. Определить количество цифр в введенном числе.

var numDigit = +prompt('Введите число ', '');
var j;

for (j = 0; numDigit >= 1; j++) {
  numDigit = numDigit / 10;
}

var resultNumDigit = 'Количество цифр в введенном числе ' + j;
console.log(resultNumDigit); 

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

var pnum;
var even = 0;
var odd = 0;
var zero = 0;
var pos = 0;
var neg = 0;

for (var g = 1; g <= 10; g++) {
  pnum = +prompt('Введите число ', '');
  pnum % 2 ? odd = ++odd : even = ++even;

  if (pnum > 0) {
    ++pos;
  } else if (pnum < 0) {
    ++neg;
  } else ++zero;
}

var resultEven = 'Количество четных ' + even;
var resultOdd = 'Количество нечетных ' + odd;
var resultZero = 'Количество нулей ' + zero;
var resultPos = 'Количество положительных ' + pos;
var resultNeg = 'Количество отрицательных ' + neg;
console.log(resultEven);
console.log(resultOdd);
console.log(resultZero);
console.log(resultPos);
console.log(resultNeg); 

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

var result;

do {
  var n1 = +prompt('Введите число ', '');
  var n2 = +prompt('Введите число ', '');
  var n3 = prompt('Введите действие ( + , - , / ,*) ', '');

  switch (n3) {
    case '+':
      result = n1 + n2;
      break;

    case '-':
      result = n1 - n2;
      break;

    case '*':
      result = n1 * n2;
      break;

    case '/':
      result = n1 / n2;
      break;
  }

  console.log(result);
} while (confirm('Продолжить?')); 

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// 10 .Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
