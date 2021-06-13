"use strict";

// 1.Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

/*
const yourAge = +prompt ("Введите ваш возраст");
let messageAge;

if (Number.isNaN(yourAge)) {
    messageAge = "Введите число";
} else if ( yourAge => 0  && yourAge <=12) {
    messageAge = "Вы ребенок";
} else if ( yourAge > 12 && yourAge <= 18) {
    messageAge = "Вы подросток";
} else if ( yourAge > 18  && yourAge <= 60) {
    messageAge = "Вы взрослый";
} else if ( yourAge > 60  && yourAge <= 120) {
    messageAge = "Вы пенсионер";
} else {
  whoAreYou = 'Not corect';
}

console.log(messageAge);

//2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

const keyNumber = +prompt ("Введите число от 0 до 9");
let messageKeySimbol;

switch (keyNumber) {
    case 1:
        messageKeySimbol = "!"
        break;
    case 2:
        messageKeySimbol = "@"
        break;
    case 3:
        messageKeySimbol = "#"
        break;
    case 4:
        messageKeySimbol = "$"
        break;
    case 5:
        messageKeySimbol = "%"
        break;
    case 6:
        messageKeySimbol = "^"
        break;
    case 7:
        messageKeySimbol = "&"
        break;
    case 8:
        messageKeySimbol = "*"
        break;
    case 9:
        messageKeySimbol = "("
        break;
    case 0:
        messageKeySimbol = ")"
        break;
    default :
        messageKeySimbol = "No correct";
}

console.log(messageKeySimbol);

// 3.Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.!!!!!!

const numbers = +prompt("введите 3-х значное число от 100 до 999");
const number1 = ~~(numbers / 100);
const number2 = ~~(numbers / 10) % 10 ;
const number3 = numbers % 10;
let numbersMessage;

if (Number.isNaN(numbers)) {
    numbersMessage = "Введите число!";
} else if (number1 === number2 || number2 === number3 || number3 === number1) {
    numbersMessage = "Совпадение чисел найдено";
} else {
    numbersMessage = "Совпадение чисел не найдено";
}

console.log(numbersMessage);

// 4.Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

const year = +prompt ("Введите год");
let yearMessage;

if (Number.isNaN(year)) {
    yearMessage ="Введите число";
} else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    yearMessage = "Год высокосный";
} else {
    yearMessage = "Год не высокосный";
}
console.log(yearMessage);

//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

const palidromeNumber = +prompt('Введите число от 10000 до 99999');
const digit1 = Math.floor(palidromeNumber / 10000 % 10);
const digit2 = Math.floor(palidromeNumber / 1000 % 10);
const digit3 = Math.floor(palidromeNumber / 10 % 10);
const digit4 = Math.floor(palidromeNumber / 1 % 10);
let palidromeAnswer;

if (Number.isNaN(palidromeNumber)) {
    palidromeAnswer = 'Введите число!';
} else if (digit1 === digit4 && digit2 === digit3) {
    palidromeAnswer ='Палидром';
} else {
    palidromeAnswer = 'Не палидром';
}

console.log(palidromeAnswer);


//6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const amount = +prompt('Введите сумму USD');
const currency = +prompt( 'EUR = 1 , UAN = 2 , AZN = 3');
const euro = 0.82;
const hrivna = 27.38;
const azerbaijaniManat = 1.70;
let messageAmount;

    switch(currency){
        case 1:
            messageAmount = amount * euro + ' EUR';
            break;
        case 2:
            messageAmount = amount * hrivna + ' UAN';
            break;
        case 3:
             messageAmount = amount * azerbaijaniManat + ' AZN';
            break;
    }
console.log(messageAmount);
*/
//7.Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var purchaseValue = +prompt('Введите сумму покупки');
var threePercent = 0.97;
var fivePercent = 0.95;
var sevenPercent = 0.93;
var purchaseValueDiscaunt;

if (purchaseValue >= 200 && purchaseValue <= 300) {
  purchaseValueDiscaunt = purchaseValue * threePercent + ' Цена со скидной 3%';
} else if (purchaseValue >= 300 && purchaseValue <= 500) {
  purchaseValueDiscaunt = purchaseValue * fivePercent + ' Цена со скидной 5%';
} else if (purchaseValue >= 500) {
  purchaseValueDiscaunt = purchaseValue * sevenPercent + ' Цена со скидной 7%';
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

var Day = +prompt('Введите день', '');
var Month = +prompt('Введите месяц', '');
var Year = +prompt('Введите год', '');

if (Day === 32) {
  console.log("Больше 32 дней многовато");
} else if (Month === 13) {
  console.log("Больше 13 месяцев");
} else if (Day < 29 && Month === 2 && (Year % 400 === 0 || Year % 4 === 0 && Year % 100 !== 0)) {
  Day++;
  console.log('День: ' + Day, 'Месяц: ' + Month, 'Год: ' + Year);
} else if (Day > 29 && Month === 2) {
  Day = 1;
  Month++;
  console.log('День: ' + Day, 'Месяц: ' + Month, 'Год: ' + Year);
} else if (Day === 28 && Month === 2) {
  Day = 1;
  Month++;
  console.log('День: ' + Day, 'Месяц: ' + Month, 'Год: ' + Year);
} else if (Day === 31 && Month === 12) {
  Day = 1;
  Month = 1;
  Year++;
  console.log('День: ' + Day, 'Месяц: ' + Month, 'Год: ' + Year);
} else if (Day === 31 && Month < 12) {
  Day = 1;
  Month++;
  console.log('День: ' + Day, 'Месяц: ' + Month, 'Год: ' + Year);
} else {
  Day++;
  console.log('День: ' + Day, 'Месяц: ' + Month, 'Год: ' + Year);
}
