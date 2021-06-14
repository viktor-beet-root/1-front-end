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

var userNumbers;
var evenNumber = 0;
var oddNumber = 0;
var zero = 0;
var positiveNumber = 0;
var negativeNumber = 0;

for (var g = 1; g <= 10; g++) {
  userNumbers = +prompt('Введите число ', '');
  userNumbers % 2 ? oddNumber = ++oddNumber : evenNumber = ++evenNumber;

  if (userNumbers > 0) {
    ++positiveNumber;
  } else if (userNumbers < 0) {
    ++negativeNumber;
  } else ++zero;
}

var resultEvenNumber = 'Количество четных ' + evenNumber;
var resultFOddNumber = 'Количество нечетных ' + oddNumber;
var resultZero = 'Количество нулей ' + zero;
var resultPositiveNumber = 'Количество положительных ' + positiveNumber;
var resultNegativeNumber = 'Количество отрицательных ' + negativeNumber;
console.log(resultEvenNumber);
console.log(resultFOddNumber);
console.log(resultZero);
console.log(resultPositiveNumber);
console.log(resultNegativeNumber); 

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

var result;

do {
  var a = +prompt('Введите число ', '');
  var b = +prompt('Введите число ', '');
  var operator = prompt('Введите действие ( + , - , / ,*) ', '');

  switch (operator) {
    case '+':
      result = a + b;
      break;

    case '-':
      result = a - b;
      break;

    case '*':
      result = a * b;
      break;

    case '/':
      result = a / b;
      break;
  }

  console.log(result);
} while (confirm('Продолжить?')); 

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).


// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

var question = '';
var dayOfWeek = '';

do {
  switch (dayOfWeek) {
    case 'Понедельник':
      dayOfWeek = 'Вторник';
      break;

    case 'Вторник':
      dayOfWeek = 'Среда';
      break;

    case 'Среда':
      dayOfWeek = 'Четверг';
      break;

    case 'Четверг':
      dayOfWeek = 'Пятница';
      break;

    case 'Пятница':
      dayOfWeek = 'Субота';
      break;

    case 'Субота':
      dayOfWeek = 'Воскресение';
      break;

    default:
      dayOfWeek = 'Понедельник';
  }

  question = dayOfWeek + '. Хотите увидеть следующий день?';
} while (confirm(question)); 

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

var resultTable;

for (var s = 2; s <= 9; s++) {
  for (var k = 1; k <= 10; k++) {
    resultTable = s * k;
    console.log("".concat(s, " * ").concat(k, " = ").concat(resultTable));
  }
} 

// 10 .Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

var randomNum = {
  num: 0,
  max: 100,
  min: 0,
  setNum: function setNum(number) {
    if (!this.validateNum(number)) return;
    this.num = number;
  },
  validateNum: function validateNum(number) {
    return number !== null && !isNaN(+number) && number > this.min && number < this.max;
  },
  getNumber: function getNumber() {
    var num1 = this.min;
    var num2 = this.max;
    var tmpNum = 0;
    var answ = '';
    var isBreak = false;

    while (true) {
      tmpNum = ~~((num1 + num2) / 2);
      answ = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(tmpNum, " \u0434\u0430 ==, \u0431\u043E\u043B\u044C\u0448\u0435: >, \u043C\u0435\u043D\u044C\u0448\u0435: <"), '');

      switch (answ) {
        case '==':
          isBreak = true;
          break;

        case '>':
          num1 = tmpNum;
          break;

        case '<':
          num2 = tmpNum;
          break;
      }

      if (isBreak) break;
    }
  }
};
randomNum.setNum(prompt("Введите число от 1 до 100"));
randomNum.getNumber();
