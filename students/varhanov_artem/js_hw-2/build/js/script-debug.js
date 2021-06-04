"use strict";

//Запросить у пользователя номер месяца и вывести на экран его название.
var month = +prompt('введите месяц');
var numberMonth = '';

switch (month) {
  case 1:
    numberMonth = numberMonth + "январь, ";

  case 2:
    numberMonth = numberMonth + "февраль, ";

  case 3:
    numberMonth = numberMonth + "март, ";

  case 4:
    numberMonth = numberMonth + "апрель, ";

  case 5:
    numberMonth = numberMonth + "май, ";

  case 6:
    numberMonth = numberMonth + "июнь, ";

  case 7:
    numberMonth = numberMonth + "июль, ";

  case 8:
    numberMonth = numberMonth + "август, ";

  case 9:
    numberMonth = numberMonth + "сентябрь, ";

  case 10:
    numberMonth = numberMonth + "октябрь, ";

  case 11:
    numberMonth = numberMonth + "ноябрь, ";

  case 12:
    numberMonth = numberMonth + "декабрь.";
    break;

  default:
    numberMonth = "not correct";
}

console.log(numberMonth); //Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

var oldAre = +prompt('How old are you?');
var whoAreYou = null;

if (oldAre >= 0 && oldAre <= 12) {
  whoAreYou = 'Child';
} else if (oldAre >= 13 && oldAre <= 18) {
  whoAreYou = 'Teenager';
} else if (oldAre >= 19 && oldAre <= 60) {
  whoAreYou = 'Grown';
} else if (Number.isNaN(oldAre)) {
  whoAreYou = 'Wrong entry Enter numbers';
} else if (oldAre >= 61) {
  whoAreYou = 'Pensioner';
} else {
  whoAreYou = 'not corect';
}

console.log(whoAreYou); //Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var userNumber = prompt('Enter a number from 1 to 9.');

if (Number.isNaN(parseInt(userNumber, 10))) {
  alert('only numbers from 1 to 9');
}

var symbol = '';

switch (parseInt(userNumber, 10)) {
  case 1:
    symbol = "!";
    break;

  case 2:
    symbol = "@";
    break;

  case 3:
    symbol = "#";
    break;

  case 4:
    symbol = "$";
    break;

  case 5:
    symbol = "%";
    break;

  case 6:
    symbol = "^";
    break;

  case 7:
    symbol = "&";
    break;

  case 8:
    symbol = "*";
    break;

  case 9:
    symbol = "(";
    break;

  default:
    symbol = "not correct";
}

console.log(symbol); //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var userNumberThree = +prompt('Please enter a three-digit number');
var numberFirst = ~~(userNumberThree / 100);
var numberSecond = ~~(userNumberThree / 10) % 10;
var numberThird = userNumberThree % 10;
var messageN;

if (Number.isNaN(userNumberThree)) {
  messageN = 'onle number';
} else if (numberFirst === numberSecond || numberFirst === numberThird || numberSecond === numberThird) {
  messageN = 'there are repetitions';
} else {
  messageN = 'no there are repetitions';
}

console.log(messageN); //Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var userYear = +prompt('Enter the year');
var messagYear = null;

if (userYear % 400 === 0 || userYear % 4 === 0 && userYear / 100 !== 0) {
  messagYear = 'is leap year';
} else {
  messagYear = 'is not leap year';
}

console.log(messagYear); //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

var userPall = +prompt("Please enter a five-digit number");
var messagPall = null;
var a = Math.floor(userPall / 10000 % 10);
var b = Math.floor(userPall / 1000 % 10);
var d = Math.floor(userPall / 10 % 10);
var e = Math.floor(userPall / 1 % 10);

if (Number.isNaN(userPall)) {
  messagPall = 'Please enter a five-digit number';
} else if (a === e && b === d) {
  messagPall = 'congratulations on this palindrome';
} else {
  messagPall = 'this is NOT a palindrome';
}

console.log(messagPall); //Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var amountUsd = +prompt(' Enter the amount');
var currencyName = prompt(' What currency would you like to transfer EUR, UAN, AZN');
var EUR = 0.80;
var UAN = 27.30;
var AZN = 1.75;
var amountN = null;
currencyName = currencyName.toUpperCase();

if (currencyName === 'EUR') {
  amountN = amountUsd * EUR;
} else if (currencyName === 'UAN') {
  amountN = amountUsd * UAN;
} else if (currencyName === 'AZN') {
  amountN = amountUsd * AZN;
} else if (Number.isNaN(amountUsd)) {
  amountN = 'Enter the number';
}

console.log(amountN); //Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var purchaseAmount = +prompt('Enter purchase amount');
var discountedAmount = null;

if (Number.isNaN(purchaseAmount)) {
  discountedAmount = 'enter the amount in numbers';
} else if (purchaseAmount < 200) {
  discountedAmount = purchaseAmount * 1;
} else if (purchaseAmount >= 200 && purchaseAmount <= 300) {
  discountedAmount = purchaseAmount * 0.97;
} else if (purchaseAmount >= 301 && purchaseAmount <= 500) {
  discountedAmount = purchaseAmount * 0.95;
} else {
  discountedAmount = purchaseAmount * 0.93;
}

console.log(discountedAmount); //Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var userCircumference = +prompt('введите длину окружности');
var userSquare = +prompt('введите периметр квадрата');
var Circumference = userCircumference / Math.PI;
var Square = userSquare / 4;
var messageYasOrNO = null;

if (Number.isNaN(userCircumference && userSquare)) {
  messageYasOrNO = ' Ведите цыфры';
} else if (Circumference <= Square) {
  messageYasOrNO = 'Окружность поместится в квадрат';
} else {
  messageYasOrNO = 'Окружность не поместится в квадрат';
}

console.log(messageYasOrNO); //Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var firstQuestion = +prompt('Что всегда должно иметь CSS-свойство? \n 1)Каждое CSS-свойство должно иметь значение;\n 2)Каждое CSS-свойство должно иметь HTML-элемент;\n 3)Каждое CSS-свойство должно иметь @media правило;(Выберите цыфру с верным ответом)');
var secondQuestion = +prompt('Если у элемента задана ширина 200px, внутренние отступы 20px и рамка 3px, по умолчанию какой размер элемент занимает в документе? \n1) 200px; \n2) 223px; \n3)246px; \n(Выберите цыфру с верным ответом)');
var thirdQuestion = +prompt('Какое свойство регулирует порядок расположения относительно, абсолютно и фиксированно расположенных элементов? \n1)z-index; \n2)float; \n3)x-index;\n(Выберите цыфру с верным ответом)');
var rating = 0;

if (Number.isNaN(firstQuestion && secondQuestion && thirdQuestion)) {
  rating = 'Вводите только цыфры';
}

if (firstQuestion === 1) {
  rating += 2;
}

if (secondQuestion === 3) {
  rating += 2;
}

if (thirdQuestion === 1) {
  rating += 2;
} else {
  rating = 0;
}

console.log(rating);