"use strict";

// 1.Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
var yourAge = +prompt("Введите ваш возраст");
var messageAge;

if (Number.isNaN(yourAge)) {
  messageAge = "Введите число";
} else if (0 <= yourAge && yourAge <= 12) {
  messageAge = "Вы ребенок";
} else if (12 <= yourAge && yourAge <= 18) {
  messageAge = "Вы подросток";
} else if (18 <= yourAge && yourAge <= 60) {
  messageAge = "Вы взрослый";
} else if (60 <= yourAge && yourAge <= 120) {
  messageAge = "Вы пенсионер";
} else {
  whoAreYou = 'not corect';
}

console.log(messageAge); 

//2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var keyNumber = +prompt("Введите число от 0 до 9");
var messageKeySimbol;

switch (keyNumber) {
  case 1:
    messageKeySimbol = "!";
    break;

  case 2:
    messageKeySimbol = "@";
    break;

  case 3:
    messageKeySimbol = "#";
    break;

  case 4:
    messageKeySimbol = "$";
    break;

  case 5:
    messageKeySimbol = "%";
    break;

  case 6:
    messageKeySimbol = "^";
    break;

  case 7:
    messageKeySimbol = "&";
    break;

  case 8:
    messageKeySimbol = "*";
    break;

  case 9:
    messageKeySimbol = "(";
    break;

  case 0:
    messageKeySimbol = ")";
    break;

  default:
    messageKeySimbol = "No correct";
}

console.log(messageKeySimbol); 

// 3.Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.!!!!!!

var numbers = +prompt("введите 3-х значное число от 100 до 999");
var number1 = ~~(numbers / 100);
var number2 = ~~(numbers / 10) % 10;
var number3 = numbers % 10;
var numbersMessage;

if (Number.isNaN(numbers)) {
  numbersMessage = "Введите число!";
} else if (number1 === number2 || number2 === number3 || number3 === number1) {
  numbersMessage = "Совпадение чисел найдено";
} else {
  numbersMessage = "Совпадение чисел не найдено";
}

console.log(numbersMessage);

// 4.Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var year = +prompt("Введите год");
var yearMessage;

if (Number.isNaN(year)) {
  yearMessage = "Введите число";
} else if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
  yearMessage = "Год высокосный";
} else {
  yearMessage = "Год не высокосный";
}

console.log(yearMessage);

//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

var palidromeNumber = +prompt('Введите число от 10000 до 99999');
var digit1 = Math.floor(palidromeNumber / 10000 % 10);
var digit2 = Math.floor(palidromeNumber / 1000 % 10);
var digit3 = Math.floor(palidromeNumber / 10 % 10);
var digit4 = Math.floor(palidromeNumber / 1 % 10);
var palidromeAnswer;

if (Number.isNaN(palidromeNumber)) {
  palidromeAnswer = 'Введите число!';
} else if (digit1 === digit4 && digit2 === digit3) {
  palidromeAnswer = 'Палидром';
} else {
  palidromeAnswer = 'Не палидром';
}

console.log(palidromeAnswer);

//6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var amount = +prompt('Введите сумму USD');
var currency = +prompt('EUR = 1 , UAN = 2 , AZN = 3');
var messageAmount;

switch (currency) {
  case 1:
    messageAmount = amount * 0.82 + ' EUR';
    break;

  case 2:
    messageAmount = amount * 27.38 + ' UAN';
    break;

  case 3:
    messageAmount = amount * 1.70 + ' AZN';
    break;
}

console.log(messageAmount); 

//7.Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var purchaseValue = +prompt('Введите сумму покупки');
var purchaseValueDiscaunt;

if (purchaseValue >= 200 && purchaseValue <= 300) {
  purchaseValueDiscaunt = purchaseValue / 100 * 97 + ' со скидной 3%';
} else if (purchaseValue >= 300 && purchaseValue <= 500) {
  purchaseValueDiscaunt = purchaseValue / 100 * 95 + ' со скидной 5%';
} else if (purchaseValue >= 500) {
  purchaseValueDiscaunt = purchaseValue / 100 * 93 + ' со скидной 7%';
} else if (Number.isNaN(purchaseValue)) {
  purchaseValueDiscaunt = 'Введите число';
}

console.log(purchaseValueDiscaunt); 

//8.Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var circumference = +prompt('Введите длину окружности');
var perimeterSquare = +prompt('Введите периметр квадрата');
var diametr = circumference / Math.PI;
var perimeter = perimeterSquare / 4;
var possibly;

if (Number.isNaN(circumference && perimeterSquare)) {
  possibly = 'Введите цифры';
} else if (diametr <= perimeter) {
  possibly = 'Поместится';
} else {
  possibly = 'Не поместится';
}

console.log(possibly);

//9.Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var river = +prompt('Главная река Украины? 1 - Волга 2 - Днепр 3 - Буг');
var president = +prompt('Первый призедент Украины? 1 - Кравчук 2 - Кучма 3 - Ельцин');
var capital = +prompt('Первая столица Украины? 1 - Харьков 2 - Киев 3 - Львов');
var score = 0;
if (river === 2) score += 2;
if (president === 1) score += 2;
if (capital === 1) score += 2;
console.log('Вы набрали ' + score + ' баллов'); 

//10.Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

var a = +prompt('Введите год');
var b = +prompt('Янвать = 0 , Февраль = 1 , Март = 2, Аперль = 3, Май = 4, Июнь = 5,  Июль = 6, Август = 7, Сентябрь = 8, Октябрь = 9, Ноябрь = 10, Дкабрь = 11');
var c = +prompt('Введите день');

switch (b) {
  case 0:
    myNewDate;
    break;

  case 1:
    myNewDate;
    break;

  case 2:
    myNewDate;
    break;

  case 3:
    myNewDate;
    break;

  case 4:
    myNewDate;
    break;

  case 5:
    myNewDate;
    break;

  case 6:
    myNewDate;
    break;

  case 7:
    myNewDate;
    break;

  case 8:
    mmyNewDate;
    break;

  case 9:
    myNewDate;
    break;

  case 10:
    myNewDate;
    break;

  case 11:
    myNewDate;
    break;

  default:
    myNewDate = "No correct";
}

var theDate = new Date(a, b, c);
var myNewDate = new Date(theDate);
myNewDate.setDate(myNewDate.getDate() + 1);
console.log(myNewDate);
