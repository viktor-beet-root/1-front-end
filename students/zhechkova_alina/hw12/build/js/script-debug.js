"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18-60) или пенсионером (60– ...).
var userAge = +prompt('Введите свой возраст');
var userAgeMessage = '';

if (userAge >= 0 && userAge < 12) {
  userAgeMessage = 'Вы являетесь ребенком';
} else if (userAge >= 12 && userAge < 18) {
  userAgeMessage = 'Вы являетесь подростком';
} else if (userAge >= 18 && userAge < 60) {
  userAgeMessage = 'Вы являетесь взрослым';
} else if (userAge >= 60 && userAge <= 120) {
  userAgeMessage = 'Вы являетесь пенсионером';
} else if (Number.isNaN(userAge)) {
  userAgeMessage = 'Некорректные данные, введите число';
} else {
  userAgeMessage = 'Некорректные данные';
}

console.log(userAgeMessage); // Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var num1 = +prompt('Введите цифру от 0 до 9');
var numSpec = '';

switch (num1) {
  case 1:
    numSpec = '!';
    break;

  case 2:
    numSpec = '@';
    break;

  case 3:
    numSpec = '#';
    break;

  case 4:
    numSpec = '$';
    break;

  case 5:
    numSpec = '%';
    break;

  case 6:
    numSpec = '^';
    break;

  case 7:
    numSpec = '&';
    break;

  case 8:
    numSpec = '*';
    break;

  case 9:
    numSpec = '(';
    break;

  case 0:
    numSpec = ')';
    break;

  default:
    numSpec = 'Введите цифру от 0 до 9';
}

console.log(numSpec); // Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var num2 = +prompt('Введите трехзначное число');
var numFirst = ~~(num2 / 100);
var numSecond = ~~(num2 / 10) % 10;
var numThird = num2 % 10;
var numSame = null;

if (numFirst === numSecond && numSecond === numThird && numFirst === numThird) {
  numSame = 'В это числе есть одинаковые цифры';
} else if (Number.isNaN(num2)) {
  numSame = 'Некорректные данные, введите число';
} else {
  numSame = 'В этом числе нет одинаковых цифр';
}

console.log(numSame); // Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var yearToCheck = +prompt('Введите год');
var yearVisokosny;

if (yearToCheck % 400 === 0 || yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) {
  yearVisokosny = 'Высокосный год';
} else if (Number.isNaN(yearToCheck)) {
  yearVisokosny = 'Некорректные данные, введите число';
} else {
  yearVisokosny = 'Невысокосный год';
}

console.log(yearVisokosny); // Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

var fiveNumb = +prompt('Введите пятиразрядное число');
var palindrome;
var n1 = ~~(fiveNumb / 10000);
var n2 = ~~(fiveNumb / 1000) % 10;
var n4 = ~~(fiveNumb / 10) % 10;
var n5 = fiveNumb % 10;

if (n1 === n5 && n2 === n4) {
  palindrome = 'Данное число является палиндромом';
} else if (Number.isNaN(fiveNumb)) {
  palindrome = 'Введите число';
} else {
  palindrome = 'Данное число не является палиндромом';
}

console.log(palindrome); // Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var usdAmount = +prompt('Введите сумму в долларах');
var chooseCurrency = prompt('Введите, в какую валюту Вы хотите перевести: EUR, UAH или AZN');
var exchange;
var eur = 0.82;
var uah = 27.38;
var azn = 1.7;

if (chooseCurrency.toUpperCase() === 'EUR') {
  exchange = usdAmount * eur;
} else if (chooseCurrency.toUpperCase() === 'UAH') {
  exchange = usdAmount * uah;
} else if (chooseCurrency.toUpperCase() === 'AZN') {
  exchange = usdAmount * azn;
} else if (Number.isNaN(usdAmount)) {
  exchange = 'Некорректные данные. Введите число';
}

console.log(exchange); // Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var sum = +prompt('Введите сумму покупки');
var sumWDiscount = null;
var discount;
var discountMessage;

if (sum < 200 && sum >= 0) {
  sumWDiscount = sum * 1;
  discountMessage = 'Сумма к покупке: ' + sumWDiscount + '.';
} else if (sum >= 200 && sum < 300) {
  sumWDiscount = sum * 0.97;
  discount = '3 %';
  discountMessage = 'На данную сумму действует скидка в ' + discount + '. Старая цена: ' + sum + '. Цена со скидкой: ' + sumWDiscount + '.';
} else if (sum >= 300 && sum < 500) {
  sumWDiscount = sum * 0.95;
  discount = '5 %';
  discountMessage = 'На данную сумму действует скидка в ' + discount + '. Старая цена: ' + sum + '. Цена со скидкой: ' + sumWDiscount + '.';
} else if (sum < 0 || Number.isNaN(sum)) {
  discountMessage = 'Некорректные данные';
} else {
  sumWDiscount = sum * 0.93;
  discount = '7 %';
  discountMessage = 'На данную сумму действует скидка в ' + discount + '. Старая цена: ' + sum + '. Цена со скидкой: ' + sumWDiscount + '.';
}

console.log(discountMessage); // Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var circleW = +prompt('Введите длину окружности');
var squareP = +prompt('Введите периметр квадрата');
var diameter = circleW / Math.PI;
var sideQ = squareP / 4;
var circleInSquare; // Квадрат поместится в круге, если диаметр окружности меньше или равен стороне квадрата.

if (diameter <= sideQ) {
  circleInSquare = 'Круг поместится в квадрат';
} else if (circleW < 0 || squareP < 0 || Number.isNaN(circleW) || Number.isNaN(squareP)) {
  circleInSquare = 'Некорректные данные';
} else {
  circleInSquare = 'Круг не поместится в квадрат';
}

console.log(circleInSquare); // Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var question1 = prompt('Какой тип данных хранится в переменной user Age? var userAge = "32": \n а) floating point number; \n б) integer; \n в) string (Выберите букву с верным ответом)');
var question2 = prompt('Какая из команд выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК»? \n а) document.write(); \n б) alert(); \n в) console.log (Выберите букву с верным ответом)');
var question3 = prompt('Для чего используется оператор "&&"? \n а) для умножения; \n б) оператор И,возвращает true, если оба аргумента истинны, а иначе – false; \n в) означает тип данных (Выберите букву с верным ответом)');
var answerCheck = 0;

if (question1.toLowerCase() === 'в') {
  answerCheck += 2;
}

if (question2.toLowerCase() === 'б') {
  answerCheck += 2;
}

if (question3.toLowerCase() === 'б') {
  answerCheck += 2;
}

var messageQuestion = 'У вас ' + answerCheck + ' баллов.';
console.log(messageQuestion); // Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

var day = +prompt('Введите день');
var month = +prompt('Введите месяц');
var year = +prompt('Введите год');
var quantity;
var newDay;
var newMonth;
var newYear;
var leapYear = year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ? true : false;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    quantity = 31;
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    quantity = 30;
    break;

  case 2:
    quantity = 28;
}

if (day + 1 > quantity) {
  1, _readOnlyError("day");

  if (month + 1 > 12) {
    1, _readOnlyError("month");
    +year, _readOnlyError("year");
  } else +month, _readOnlyError("month");
} else +day, _readOnlyError("day");

nextDate = "".concat(day, ".").concat(month, ".").concat(year);
console.log(nextDate);