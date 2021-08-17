"use strict";

// 1)Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
var age = +prompt('Введіть свій вік');
var ageD;

if (age >= 0 && age < 12) {
  ageD = 'Ребенок';
} else if (age >= 12 && age <= 18) {
  ageD = 'Подросток';
} else if (age > 18 && age <= 60) {
  ageD = 'Взрослий';
} else if (age >= 60 && age < 119) {
  ageD = 'Пенсионер';
} else {
  ageD = 'not correct data';
}

console.log(ageD); // 2)Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var numberUser = +prompt('Введіть число');
var specialS = null;

switch (numberUser) {
  case 1:
    specialS = '!';
    break;

  case 2:
    specialS = '@';
    break;

  case 3:
    specialS = '#';
    break;

  case 4:
    specialS = '$';
    break;

  case 5:
    specialS = '%';
    break;

  case 6:
    specialS = '^';
    break;

  case 7:
    specialS = '&';
    break;

  case 8:
    specialS = '*';
    break;

  case 9:
    specialS = '(';
    break;

  case 0:
    specialS = ')';
    break;

  default:
    specialS = 'not correct';
}

console.log(specialS); // 3)Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var numberUser3 = +prompt('Введіть трьохзначне число');
var number1 = ~~(numberUser3 / 100);
var number2 = ~~(numberUser3 / 10) % 10;
var number3 = numberUser3 % 10;
var message3;

if (number1 === number2 || number1 === number3 || number2 === number3) {
  message3 = "Присутні однакові числа";
} else {
  message3 = 'Цифри не однакові';
}

console.log(message3); // 4)Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var year = +prompt('Введіть рік');
var yearLeap;

if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
  yearLeap = 'Високосний рік';
} else {
  yearLeap = 'Не високосний';
}

console.log(yearLeap); // 5)Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

var numberUserFive = +prompt('Введіть пятизначне число');
var numberOne = numberUserFive % 10;
var numberTwo = Math.floor(numberUserFive / 10) % 10;
var numberOneTwo = numberTwo + numberOne * 10;
var numberThreeFour = Math.floor(numberUserFive / 1000);
var palindrom;

if (numberOneTwo === numberThreeFour) {
  palindrom = 'Введене число паліндром';
} else {
  palindrom = 'Введене число не є паліндромом';
}

console.log(palindrom); // 6)Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var quantityUser = +prompt('Введіть суму в USD:');
var currency = prompt('Виберіть валюту: EUR = 1, UAH = 2, AZN = 3', 0);

switch (currency) {
  case '1':
    console.log(quantityUser * 0.89 + 'EUR');
    break;

  case '2':
    console.log(quantityUser * 27.90 + 'UAH');
    break;

  case '3':
    console.log(quantityUser * 1.47 + 'AZN');
    break;
} // 7)Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.


var quantityShop = +prompt('Введіть суму покупки');
var discount;

if (quantityShop >= 200 && quantityShop <= 300) {
  discount = "Ваша знижка 3%";
} else if (quantityShop > 300 && quantityShop <= 500) {
  discount = 'Ваша знижка 5%';
} else if (quantityShop > 500) {
  discount = 'Знижка 7%';
}

console.log(discount); // 8)Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var circum = +prompt('Ведіть довжину окрусності');
var square = +prompt('Введіть периметр квадрата');
var lengthCircum = circum / Math.PI;
console.log(lengthCircum);
var sumSquare = square / 4;
var maybe;

if (square >= lengthCircum) {
  maybe = 'Окружність поміститься в квадрат';
} else if (square <= lengthCircum) {
  maybe = 'Окружність не поміститься в квадрат';
}

console.log(maybe); // 9)Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var q1 = +prompt('Скільки колоьрів у веселці? Введіть відповідь: Чотири - 1, Вісім - 2, Сім - 3');
var respond1;

switch (q1) {
  case 1:
    respond1 = false;
    break;

  case 2:
    respond1 = false;
    break;

  case 3:
    respond1 = true;
    break;
}

var q2 = +prompt('Скільки кольорів має прапор України? Введіть відповідь: Два - 1, Три - 2, Один - 3');
var respond2;

switch (q2) {
  case 1:
    respond2 = true;
    break;

  case 2:
    respond2 = false;
    break;

  case 3:
    respond2 = false;
    break;
}

var q3 = +prompt('Оберіть найбільше число. Введіть відповідь: 33 - 1, 67 - 2, 100 - 3');
var respond3;

switch (q3) {
  case 1:
    respond3 = false;
    break;

  case 2:
    respond3 = false;
    break;

  case 3:
    respond3 = true;
}

var result = 0;

if (respond3 === true || respond2 === true || respond3 === true) {
  result += 2;
}

if (respond1 == true && respond2 == true || respond1 == true && respond3 == true || respond2 == true && respond3 == true) {
  result += 2;
}

if (respond1 === true && respond2 === true && respond3 === true) {
  result += 2;
}

console.log("Набрано балів: " + result); // 10)Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.